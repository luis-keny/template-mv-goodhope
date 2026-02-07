export const commonDrawerExampleCode = `<script setup lang="ts">
import { useOverlayStore } from '@/stores/overlay'
import { Button } from '@/components/ui/button'
import CommonDrawer from '@/components/common/CommonDrawer.vue'

const overlay = useOverlayStore()

const openDrawer = () => {
  overlay.open('my-drawer-id', { 
    items: ['Opción A', 'Opción B'] 
  })
}
</script>

<template>
  <Button @click="openDrawer">Abrir Drawer</Button>

  <CommonDrawer 
    id="my-drawer-id" 
    title="Opciones Rápidas" 
    description="Selecciona una de las siguientes"
  >
    <template #default="{ data }">
      <div class="flex flex-col gap-2">
        <Button v-for="i in data?.items" :key="i" variant="ghost">
          {{ i }}
        </Button>
      </div>
    </template>
    <template #footer>
      <Button variant="outline" @click="overlay.close('my-drawer-id')">
        Cerrar
      </Button>
    </template>
  </CommonDrawer>
</template>
`;