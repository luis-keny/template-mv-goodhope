<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Sonner from '@/components/ui/sonner/Sonner.vue'
import { toast } from 'vue-sonner'

const triggerSimple = () => {
  toast('Notificación', { description: 'Este es un mensaje simple.' })
}

const triggerSuccess = () => {
  toast.success('Operación exitosa', { description: 'Los datos fueron guardados.' })
}

const triggerError = () => {
  toast.error('Error', {
    description: 'No se pudo completar la acción.',
    action: { label: 'Reintentar', onClick: () => triggerSimple() },
  })
}

const triggerPromise = () => {
  const fake = () => new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() > 0.5 ? resolve('ok') : reject('fail')), 1200)
  })
  toast.promise(fake, {
    loading: 'Procesando...',
    success: (data: unknown) => ({ message: 'Completado', description: String(data) }),
    error: (err: unknown) => ({ message: 'Falló', description: String(err) }),
  })
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Sonner (Toasts)</CardTitle>
      <CardDescription>Notificaciones ligeras y configurables</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="flex gap-2 flex-wrap">
        <Button variant="outline" @click="triggerSimple">Simple</Button>
        <Button variant="outline" @click="triggerSuccess">Success</Button>
        <Button variant="outline" @click="triggerError">Error + Action</Button>
        <Button variant="outline" @click="triggerPromise">Promise</Button>
      </div>
      <Sonner :rich-colors="true" :close-button="true" position="top-right" />
    </CardContent>
  </Card>
</template>
