<script setup lang="ts">
import { useOverlayStore } from '@/stores/overlay'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CommonSheet from '@/components/common/CommonSheet.vue'

const overlay = useOverlayStore()

const openSheet = () => {
  overlay.open('doc-common-sheet', {
    menuItems: [
      { label: 'Dashboard', icon: 'LayoutDashboard' },
      { label: 'Configuración', icon: 'Settings' },
      { label: 'Perfil', icon: 'User' },
      { label: 'Cerrar Sesión', icon: 'LogOut' }
    ]
  })
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Sheet Reutilizable (Common)</CardTitle>
      <CardDescription>
        Uso de CommonSheet para navegación lateral o paneles de configuración persistentes.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Button variant="outline" @click="openSheet">Abrir Panel Lateral</Button>

      <CommonSheet 
        id="doc-common-sheet" 
        title="Menú de Aplicación" 
        description="Navega rápidamente entre las secciones principales."
        side="right"
      >
        <template #default="{ data }">
          <nav class="flex flex-col gap-2 mt-4">
            <a 
              v-for="item in data?.menuItems" 
              :key="item.label" 
              href="#" 
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
            >
              {{ item.label }}
            </a>
          </nav>
        </template>
        <template #footer>
          <p class="text-xs text-center text-muted-foreground w-full">v1.0.0 Stable</p>
        </template>
      </CommonSheet>
    </CardContent>
  </Card>
</template>
