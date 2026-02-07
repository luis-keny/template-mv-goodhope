<script setup lang="ts">
import { computed } from 'vue'
import { useOverlayStore } from '@/stores/overlay'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'

interface Props {
  id: string
  title?: string
  description?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  showFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  side: 'right',
  showFooter: true
})

const { getOverlay, close } = useOverlayStore()
const overlay = computed(() => getOverlay(props.id))

const handleUpdateOpen = (val: boolean) => {
  if (!val) close(props.id)
}
</script>

<template>
  <Sheet :open="overlay.isOpen" @update:open="handleUpdateOpen">
    <SheetContent :side="side">
      <SheetHeader v-if="title || description">
        <SheetTitle v-if="title">{{ title }}</SheetTitle>
        <SheetDescription v-if="description">
          {{ description }}
        </SheetDescription>
      </SheetHeader>

      <div class="py-4">
        <slot :data="overlay.data" />
      </div>

      <SheetFooter v-if="showFooter">
        <slot name="footer" :data="overlay.data" />
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
