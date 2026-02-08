<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import hljs from 'highlight.js/lib/common'
import 'highlight.js/styles/atom-one-dark.css'
import { CheckCheck, Copy } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipTrigger, TooltipProvider, TooltipContent } from '@/components/ui/tooltip';

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

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="relative hljs bg-black/90 p-4 text-xs leading-relaxed">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="ghost" size="icon-sm" @click="copy" class="absolute top-2 right-2 text-white/50 hover:bg-white/10 hover:text-white">
            <span class="sr-only">Copy</span>
            <span v-if="!copied">
              <Copy/>
            </span>
            <span v-else>
              <CheckCheck/>
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p v-if="!copied">Copiar código</p>
          <p v-else>Copiado</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    
    <div class="flex">
      <div v-if="showLineNumbers" aria-hidden="true" class="mr-4 select-none text-right text-neutral-400">
        <span class="block" v-for="n in lineCount" :key="n">{{ n }}</span>
      </div>
      <div class="overflow-x-auto no-scrollbar">
        <pre class="m-0" v-html="html"></pre>
      </div>
    </div>
  </div>
</template>
