<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import hljs from 'highlight.js/lib/common'
import 'highlight.js/styles/atom-one-dark.css'
import { CheckCheck, Copy } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

function normalizeCodeBlock(code: string): string {
  const trimmed = code.replace(/^\s*\n/, '').replace(/\n\s*$/, '')
  const lines = trimmed.split('\n')
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^(\s+)/)?.[0].length ?? 0)
  const minIndent = indents.length ? Math.min(...indents) : 0

  return minIndent > 0
    ? lines.map((line) => line.slice(minIndent)).join('\n')
    : trimmed
}

const props = withDefaults(defineProps<{
  code: string
  language?: string
  showLineNumbers?: boolean
}>(), {
  language: 'vue',
  showLineNumbers: false,
})

const html = ref('')
const normalizedCode = computed(() => normalizeCodeBlock(props.code))
const lineCount = computed(() => normalizedCode.value.split('\n').length)

watchEffect(() => {
  try {
    html.value = hljs.highlight(normalizedCode.value, { language: props.language }).value
  } catch {
    html.value = hljs.highlightAuto(normalizedCode.value).value
  }
})

const copied = ref(false)
const copyFailed = ref(false)

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    copyFailed.value = false
  } catch {
    copied.value = false
    copyFailed.value = true
  }

  setTimeout(() => {
    copied.value = false
    copyFailed.value = false
  }, 1200)
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
          <p v-if="copyFailed">No se pudo copiar</p>
          <p v-else-if="copied">Copiado</p>
          <p v-else>Copiar código</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <div class="flex max-h-[400px] overflow-y-auto no-scrollbar">
      <div v-if="showLineNumbers" aria-hidden="true" class="mr-4 select-none text-right text-neutral-400">
        <span class="block" v-for="n in lineCount" :key="n">{{ n }}</span>
      </div>
      <div class="overflow-x-auto h-full no-scrollbar">
        <pre class="m-0" v-html="html"></pre>
      </div>
    </div>
  </div>
</template>
