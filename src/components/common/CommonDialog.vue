<script setup lang="ts">
import { computed } from 'vue'
import { useOverlayStore } from '@/stores/overlay'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

interface Props {
  id: string
  title?: string
  description?: string
  showFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showFooter: true
})

const { getOverlay, close } = useOverlayStore()
const overlay = computed(() => getOverlay(props.id))

const handleUpdateOpen = (val: boolean) => {
  if (!val) close(props.id)
}
</script>

<template>
  <Dialog :open="overlay.isOpen" @update:open="handleUpdateOpen">
    <DialogContent>
      <DialogHeader v-if="title || description">
        <DialogTitle v-if="title">{{ title }}</DialogTitle>
        <DialogDescription v-if="description">
          {{ description }}
        </DialogDescription>
      </DialogHeader>

      <slot :data="overlay.data" />

      <DialogFooter v-if="showFooter">
        <slot name="footer" :data="overlay.data" />
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
