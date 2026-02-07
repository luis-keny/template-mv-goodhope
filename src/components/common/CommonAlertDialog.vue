<script setup lang="ts">
import { computed } from 'vue'
import { useOverlayStore } from '@/stores/overlay'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'

interface Props {
  id: string
  title?: string
  description?: string
  cancelText?: string
  actionText?: string
}

const props = withDefaults(defineProps<Props>(), {
  cancelText: 'Cancelar',
  actionText: 'Continuar'
})

const emit = defineEmits(['action', 'cancel'])

const { getOverlay, close } = useOverlayStore()
const overlay = computed(() => getOverlay(props.id))

const handleUpdateOpen = (val: boolean) => {
  if (!val) close(props.id)
}

const onAction = () => {
  emit('action', overlay.value.data)
  close(props.id)
}

const onCancel = () => {
  emit('cancel', overlay.value.data)
  close(props.id)
}
</script>

<template>
  <AlertDialog :open="overlay.isOpen" @update:open="handleUpdateOpen">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle v-if="title">{{ title }}</AlertDialogTitle>
        <AlertDialogDescription v-if="description">
          {{ description }}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <slot :data="overlay.data" />

      <AlertDialogFooter>
        <AlertDialogCancel @click="onCancel">{{ cancelText }}</AlertDialogCancel>
        <AlertDialogAction @click="onAction">{{ actionText }}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
