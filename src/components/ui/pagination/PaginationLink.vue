<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { buttonVariants } from '@/components/ui/button'

const props = withDefaults(defineProps<{
  size?: ButtonVariants["size"]
  variant?: ButtonVariants["variant"]
  class?: HTMLAttributes["class"]
  isActive?: boolean
  href?: string
}>(), {
  size: "icon",
  variant: "default",
})
</script>

<template>
  <a
    :href="href"
    :class="cn(
      buttonVariants({
        variant: isActive ? variant : 'ghost',
        size,
      }),
      props.class
    )"
  >
    <slot />
  </a>
</template>
