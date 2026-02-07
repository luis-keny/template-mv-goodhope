export const commonDialogExampleCode = `<script setup lang="ts">
import { useOverlayStore } from '@/stores/overlay'
import { Button } from '@/components/ui/button'
import CommonDialog from '@/components/common/CommonDialog.vue'

const overlay = useOverlayStore()

const openDialog = () => {
  overlay.open('my-dialog-id', { title: 'Hola Mundo' })
}
</script>

<template>
  <Button @click="openDialog">Abrir Diálogo</Button>

  <CommonDialog 
    id="my-dialog-id" 
    title="Mi Diálogo" 
    description="Descripción de ejemplo"
  >
    <template #default="{ data }">
      <p>Contenido dinámico: {{ data?.title }}</p>
    </template>
    <template #footer>
      <Button variant="secondary" @click="overlay.close('my-dialog-id')">
        Entendido
      </Button>
    </template>
  </CommonDialog>
</template>
`;