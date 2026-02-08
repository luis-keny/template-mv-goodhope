<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import CodeBlock from './CodeBlock.vue'

interface Props {
  code: string | string[]
  language?: string | string[]
  showLineNumbers?: boolean
  minHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'vue',
  showLineNumbers: true,
  minHeight: '300px'
})
</script>

<template>
  <Card class="overflow-hidden">
    <CardContent 
      class="pt-6 grid place-items-center" 
      :style="{ minHeight }"
    >
      <slot />
    </CardContent>

    <template v-if="Array.isArray(props.code)">
      <CodeBlock 
        v-for="(c, index) in props.code"
        :key="index"
        :code="c" 
        :language="Array.isArray(props.language) ? props.language[index] : props.language" 
        :showLineNumbers="props.showLineNumbers" 
      />
    </template>
    <CodeBlock 
      v-else
      :code="props.code" 
      :language="props.language as string" 
      :showLineNumbers="props.showLineNumbers" 
    />
  </Card>
</template>
