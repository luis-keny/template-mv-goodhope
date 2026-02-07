<script setup lang="ts">
import { useOverlayStore } from '@/stores/overlay'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CommonDrawer from '@/components/common/CommonDrawer.vue'

const overlay = useOverlayStore()

const openDrawer = () => {
  overlay.open('doc-common-drawer', {
    stats: [
      { label: 'Objetivo', value: 400 },
      { label: 'Actual', value: 250 },
      { label: 'Restante', value: 150 }
    ]
  })
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Drawer Reutilizable (Common)</CardTitle>
      <CardDescription>
        Uso de CommonDrawer para paneles inferiores optimizados para móviles.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Button variant="outline" @click="openDrawer">Ver Estadísticas Diarias</Button>

      <CommonDrawer 
        id="doc-common-drawer" 
        title="Resumen de Actividad" 
        description="Datos actualizados hace 5 minutos."
      >
        <template #default="{ data }">
          <div class="py-6 space-y-4 text-center">
            <div class="grid grid-cols-3 gap-4">
              <div v-for="stat in data?.stats" :key="stat.label" class="space-y-1">
                <p class="text-2xl font-bold">{{ stat.value }}</p>
                <p class="text-xs text-muted-foreground uppercase tracking-wider">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex flex-col gap-2 w-full">
            <Button @click="overlay.close('doc-common-drawer')">Confirmar</Button>
            <Button variant="outline" @click="overlay.close('doc-common-drawer')">Cancelar</Button>
          </div>
        </template>
      </CommonDrawer>
    </CardContent>
  </Card>
</template>
