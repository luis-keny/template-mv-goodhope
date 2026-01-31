<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { useVModel } from "@vueuse/core"
import { cn } from "@/lib/utils"

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  value?: string | number
  class?: HTMLAttributes["class"]
}>()

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
  (e: "input", ev: Event): void
  (e: "change", ev: Event): void
  (e: "blur", ev: FocusEvent): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const actualValue = computed(() => props.value ?? modelValue.value ?? "")

const onInput = (e: Event) => {
  const t = e.target as HTMLInputElement
  emits("update:modelValue", t.value)
  emits("input", e)
}
const onChange = (e: Event) => emits("change", e)
const onBlur = (e: FocusEvent) => emits("blur", e)
</script>

<template>
  <input
    :value="actualValue"
    v-bind="$attrs"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
    data-slot="input"
    :class="cn(
      'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      props.class,
    )"
  >
</template>
