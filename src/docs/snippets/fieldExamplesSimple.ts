export const fieldExamplesSimpleCode = `<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, Field as VeeField } from 'vee-validate'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import NativeSelect from '@/components/ui/native-select/NativeSelect.vue'
import NativeSelectOption from '@/components/ui/native-select/NativeSelectOption.vue'
import RadioGroup from '@/components/ui/radio-group/RadioGroup.vue'
import RadioGroupItem from '@/components/ui/radio-group/RadioGroupItem.vue'
import { reactive, watch, h } from 'vue'
import { toast } from 'vue-sonner'
import Sonner from '@/components/ui/sonner/Sonner.vue'

type User = { name: string; email: string; subscribe: boolean; role: string; status: string }
const existing: User = reactive({ name: 'Ada Lovelace', email: 'ada@example.com', subscribe: true, role: 'user', status: 'active' })

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Invalid email address.'),
    subscribe: z.boolean(),
    role: z.enum(['user', 'admin', 'owner']),
    status: z.enum(['active', 'inactive']),
  }),
)

const { handleSubmit, values, setValues } = useForm<User>({
  validationSchema: formSchema,
  initialValues: existing,
})

watch(existing, (newVal) => {
  setValues(newVal)
})

watch(values, (newVal) => {
  Object.assign(existing, newVal)
}, { deep: true })

const onSubmit = handleSubmit((data) => {
  toast.success('Formulario enviado', {
    description: h('pre', { class: 'bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4' }, h('code', JSON.stringify(data, null, 2))),
    position: 'bottom-right',
  })
}, (errors) => {
  toast.error('No se pudo enviar', {
    description: h('pre', { class: 'bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4' }, h('code', JSON.stringify(errors, null, 2))),
    position: 'bottom-right',
  })
})
</script>

<template>
  <Card class="w-full sm:max-w-md">
    <CardHeader>
      <CardTitle>Edit User</CardTitle>
      <CardDescription>Formulario con valores por defecto</CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit="onSubmit" class="space-y-4">
        <FieldGroup>
          <VeeField v-slot="{ field, errors }" name="name">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="user-name">Name</FieldLabel>
              <Input id="user-name" v-bind="field" autocomplete="off" :aria-invalid="!!errors.length" />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
          <VeeField v-slot="{ field, errors }" name="email">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="user-email">Email</FieldLabel>
              <Input id="user-email" type="email" v-bind="field" autocomplete="off" :aria-invalid="!!errors.length" />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
          <VeeField v-slot="{ field, errors }" name="subscribe">
            <Field :data-invalid="!!errors.length" orientation="horizontal">
              <FieldLabel for="user-subscribe">Subscribe</FieldLabel>
              <Checkbox v-model="field.value" />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
          <VeeField v-slot="{ field, errors }" name="role">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="user-role">Role</FieldLabel>
              <NativeSelect :modelValue="field.value" @update:modelValue="field.onChange" :aria-invalid="!!errors.length">
                <NativeSelectOption value="user">User</NativeSelectOption>
                <NativeSelectOption value="admin">Admin</NativeSelectOption>
                <NativeSelectOption value="owner">Owner</NativeSelectOption>
              </NativeSelect>
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
          <VeeField v-slot="{ field, errors }" name="status">
            <Field :data-invalid="!!errors.length">
              <FieldLabel>Status</FieldLabel>
              <RadioGroup :modelValue="field.value" @update:modelValue="field.onChange" class="grid gap-2">
                <div class="flex items-center gap-2">
                  <RadioGroupItem id="status-active" value="active" />
                  <label for="status-active" class="text-sm">Active</label>
                </div>
                <div class="flex items-center gap-2">
                  <RadioGroupItem id="status-inactive" value="inactive" />
                  <label for="status-inactive" class="text-sm">Inactive</label>
                </div>
              </RadioGroup>
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
        </FieldGroup>
        <div class="text-sm text-muted-foreground">Valores actuales: {{ values }}</div>
        <Button type="submit">Guardar</Button>
      </form>
    </CardContent>
  </Card>
  <Sonner :rich-colors="true" :close-button="true" position="bottom-right" />
</template>
`
