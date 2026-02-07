<script setup lang="ts">
import { useOverlayStore } from '@/stores/overlay'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CommonDialog from '@/components/common/CommonDialog.vue'

const overlay = useOverlayStore()

const openDialog = () => {
  overlay.open('doc-common-dialog', {
    user: { name: 'John Doe', email: 'john@example.com' }
  })
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Diálogo Reutilizable (Common)</CardTitle>
      <CardDescription>
        Uso de CommonDialog con el store centralizado para manejar datos dinámicos.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Button variant="outline" @click="openDialog">Ver Perfil de Usuario</Button>

      <CommonDialog 
        id="doc-common-dialog" 
        title="Información del Usuario" 
        description="Detalles recuperados desde el store."
      >
        <template #default="{ data }">
          <div class="py-4 space-y-2">
            <p><strong>Nombre:</strong> {{ data?.user?.name }}</p>
            <p><strong>Email:</strong> {{ data?.user?.email }}</p>
          </div>
        </template>
        <template #footer>
          <Button @click="overlay.close('doc-common-dialog')">Cerrar</Button>
        </template>
      </CommonDialog>
    </CardContent>
  </Card>
</template>
