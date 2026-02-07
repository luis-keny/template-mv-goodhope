export const commonSheetExampleCode = `<script setup lang="ts">
import { useOverlayStore } from '@/stores/overlay'
import { Button } from '@/components/ui/button'
import CommonSheet from '@/components/common/CommonSheet.vue'

const overlay = useOverlayStore()

const openSheet = () => {
  overlay.open('my-sheet-id', { 
    options: ['Opción 1', 'Opción 2', 'Opción 3'] 
  })
}
</script>

<template>
  <Button @click="openSheet">Abrir Sheet</Button>

  <CommonSheet 
    id="my-sheet-id" 
    title="Menú Lateral" 
    description="Configuración avanzada"
    side="left"
  >
    <template #default="{ data }">
      <ul class="space-y-2">
        <li v-for="opt in data?.options" :key="opt" class="p-2 border-b">
          {{ opt }}
        </li>
      </ul>
    </template>
    <template #footer>
      <Button class="w-full" @click="overlay.close('my-sheet-id')">
        Guardar Cambios
      </Button>
    </template>
  </CommonSheet>
</template>
`;