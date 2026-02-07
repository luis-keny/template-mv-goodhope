<script setup lang="ts">
import { h } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, Field as VeeField } from 'vee-validate'
import { toast } from 'vue-sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Sonner from '@/components/ui/sonner/Sonner.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'

const formSchema = toTypedSchema(
  z.object({
    title: z
      .string()
      .min(5, 'El título del error debe tener al menos 5 caracteres.')
      .max(32, 'El título del error debe tener como máximo 32 caracteres.'),
    description: z
      .string()
      .min(20, 'La descripción debe tener al menos 20 caracteres.')
      .max(100, 'La descripción debe tener como máximo 100 caracteres.'),
  }),
)

const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: '',
    description: '',
  },
})

const onSubmit = handleSubmit((data) => {
  toast('Has enviado los siguientes valores:', {
    description: h('pre', { class: 'bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4' }, h('code', JSON.stringify(data, null, 2))),
    position: 'bottom-right',
    class: 'flex flex-col gap-2',
    style: {
      '--border-radius': 'calc(var(--radius)  + 4px)',
    },
  })
})
</script>

<template>
  <Card class="w-full sm:max-w-md">
    <CardHeader>
      <CardTitle>Reportar Error</CardTitle>
      <CardDescription>
        Ayúdanos a mejorar reportando los errores que encuentres.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form id="form-vee-demo" @submit="onSubmit">
        <FieldGroup>
          <VeeField v-slot="{ field, errors }" name="title">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="form-vee-demo-title">
                Título del Error
              </FieldLabel>
              <Input
                id="form-vee-demo-title"
                v-bind="field"
                placeholder="El botón de login no funciona en móvil"
                autocomplete="off"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors.map(e => ({ message: e }))" />
            </Field>
          </VeeField>

          <VeeField v-slot="{ field, errors }" name="description">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="form-vee-demo-description">
                Descripción
              </FieldLabel>
              <Textarea
                id="form-vee-demo-description"
                v-bind="field"
                placeholder="Al hacer clic en el botón de login desde un dispositivo móvil, no sucede nada. Se espera que se abra el formulario de inicio de sesión."
                autocomplete="off"
                :aria-invalid="!!errors.length"
                class="min-h-20"
              />
              <FieldDescription>
                Incluye pasos para reproducir, comportamiento esperado y lo que realmente sucedió.
              </FieldDescription>
              <FieldError v-if="errors.length" :errors="errors.map(e => ({ message: e }))" />
            </Field>
          </VeeField>
        </FieldGroup>
        <Field orientation="horizontal" class="mt-4">
          <Button type="button" variant="outline" @click="resetForm">
            Reiniciar
          </Button>
          <Button type="submit">
            Enviar
          </Button>
        </Field>
      </form>
    </CardContent>
    <Sonner />
  </Card>
</template>
