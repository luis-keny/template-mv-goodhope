<script setup lang="ts">
import { useOverlayStore } from '@/stores/overlay'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CommonAlertDialog from '@/components/common/CommonAlertDialog.vue'
import { toast } from 'vue-sonner'

const overlay = useOverlayStore()

const openAlert = () => {
  overlay.open('doc-common-alert', { action: 'delete_account' })
}

const handleAction = (data: any) => {
  toast({
    title: "Acción confirmada",
    description: `Se ha procesado la acción: ${data?.action}`,
  })
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Alerta Reutilizable (Common)</CardTitle>
      <CardDescription>
        Uso de CommonAlertDialog para confirmaciones críticas con manejo de eventos.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Button variant="destructive" @click="openAlert">Eliminar Cuenta</Button>

      <CommonAlertDialog 
        id="doc-common-alert" 
        title="¿Estás completamente seguro?" 
        description="Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta y todos los datos asociados."
        actionText="Sí, eliminar cuenta"
        @action="handleAction"
      />
    </CardContent>
  </Card>
</template>
