<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import hljs from 'highlight.js/lib/common'
import 'highlight.js/styles/atom-one-dark.css'

const props = withDefaults(defineProps<{
  code: string
  language?: string
  showLineNumbers?: boolean
}>(), {
  language: 'vue',
  showLineNumbers: false,
})

const html = ref('')
const normalizedCode = computed(() =>
  (() => {
    const trimmed = props.code.replace(/^\s*\n/, '').replace(/\n\s*$/, '')
    const lines = trimmed.split('\n')
    const indents = lines
      .filter(l => l.trim().length > 0)
      .map(l => (l.match(/^(\s+)/)?.[0].length) ?? 0)
    const minIndent = indents.length ? Math.min(...indents) : 0
    const dedented = minIndent > 0 ? lines.map(l => l.slice(minIndent)).join('\n') : trimmed
    return dedented
  })()
)
const lineCount = computed(() => normalizedCode.value.split('\n').length)
watchEffect(() => {
  try {
    html.value = hljs.highlight(normalizedCode.value, { language: props.language }).value
  } catch {
    html.value = hljs.highlightAuto(normalizedCode.value).value
  }
})
</script>

<template>
  <div class="hljs rounded-md bg-black/90 p-4 text-xs leading-relaxed overflow-x-auto">
    <div class="flex">
      <div v-if="showLineNumbers" aria-hidden="true" class="mr-4 select-none text-right text-neutral-400">
        <span class="block" v-for="n in lineCount" :key="n">{{ n }}</span>
      </div>
      <pre class="m-0" v-html="html"></pre>
    </div>
  </div>
</template>
