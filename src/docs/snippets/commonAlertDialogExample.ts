export const commonAlertDialogExampleCode = `<script setup lang="ts">
import { useOverlayStore } from '@/stores/overlay'
import { Button } from '@/components/ui/button'
import CommonAlertDialog from '@/components/common/CommonAlertDialog.vue'

const overlay = useOverlayStore()

const openAlert = () => {
  overlay.open('alert-id', { itemId: 123 })
}

const onConfirm = (data: any) => {
  console.log('Confirmado para id:', data?.itemId)
}
</script>

<template>
  <Button @click="openAlert">Borrar elemento</Button>

  <CommonAlertDialog 
    id="alert-id" 
    title="Confirmar borrado" 
    description="¿Seguro que quieres borrar este elemento?"
    actionText="Borrar"
    @action="onConfirm"
  />
</template>
`;
