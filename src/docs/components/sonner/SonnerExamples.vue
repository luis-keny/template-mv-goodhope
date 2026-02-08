<script setup lang="ts">
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
  <div class="flex gap-2 flex-wrap justify-center">
    <Button variant="outline" @click="triggerSimple">Simple</Button>
    <Button variant="outline" @click="triggerSuccess">Success</Button>
    <Button variant="outline" @click="triggerError">Error + Action</Button>
    <Button variant="outline" @click="triggerPromise">Promise</Button>
    <Sonner :rich-colors="true" :close-button="true" position="top-right" />
  </div>
</template>
