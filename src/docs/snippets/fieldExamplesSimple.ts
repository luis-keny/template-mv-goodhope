export const fieldExamplesSimpleCode = `<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, Field as VeeField } from 'vee-validate'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import NativeSelect from '@/components/ui/native-select/NativeSelect.vue'
import NativeSelectOption from '@/components/ui/native-select/NativeSelectOption.vue'
import RadioGroup from '@/components/ui/radio-group/RadioGroup.vue'
import RadioGroupItem from '@/components/ui/radio-group/RadioGroupItem.vue'
import { reactive, watch, h } from 'vue'
import { toast } from 'vue-sonner'

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
  <div class="w-full sm:max-w-md">
    <form @submit="onSubmit" class="space-y-4">
      <FieldGroup>
        <VeeField v-slot="{ field, errors }" name="name">
          <Field :data-invalid="!!errors.length">
            <FieldLabel for="user-name">Name</FieldLabel>
            <Input id="user-name" v-bind="field" autocomplete="off" :aria-invalid="!!errors.length" />
            <FieldError v-if="errors.length" :errors="errors.map(e => ({ message: e }))" />
          </Field>
        </VeeField>
        <VeeField v-slot="{ field, errors }" name="email">
          <Field :data-invalid="!!errors.length">
            <FieldLabel for="user-email">Email</FieldLabel>
            <Input id="user-email" type="email" v-bind="field" autocomplete="off" :aria-invalid="!!errors.length" :unchecked-value="false" />
            <FieldError v-if="errors.length" :errors="errors.map(e => ({ message: e }))" />
          </Field>
        </VeeField>
        <VeeField v-slot="{ errors }" name="subscribe" type="checkbox" :value="true" :unchecked-value="false" >
          <Field :data-invalid="!!errors.length" orientation="horizontal">
            <FieldLabel for="user-subscribe">Subscribe</FieldLabel>
            <Checkbox v-model="existing.subscribe" />
            <FieldError v-if="errors.length" :errors="errors.map(e => ({ message: e }))" />
          </Field>
        </VeeField>
        <VeeField v-slot="{ field, errors }" name="role">
          <Field :data-invalid="!!errors.length">
            <FieldLabel for="user-role">Role</FieldLabel>
            <NativeSelect :modelValue="field.value" :aria-invalid="!!errors.length">
              <NativeSelectOption value="user">User</NativeSelectOption>
              <NativeSelectOption value="admin">Admin</NativeSelectOption>
              <NativeSelectOption value="owner">Owner</NativeSelectOption>
            </NativeSelect>
            <FieldError v-if="errors.length" :errors="errors.map(e => ({ message: e }))" />
          </Field>
        </VeeField>
        <VeeField v-slot="{ field, errors }" name="status">
          <Field :data-invalid="!!errors.length">
            <FieldLabel>Status</FieldLabel>
            <RadioGroup v-model="existing.status" class="flex gap-4">
              <Field orientation="horizontal" class="space-y-0 items-center">
                <RadioGroupItem value="active" id="status-active" />
                <FieldLabel for="status-active" class="font-normal cursor-pointer">Active</FieldLabel>
              </Field>
              <Field orientation="horizontal" class="space-y-0 items-center">
                <RadioGroupItem value="inactive" id="status-inactive" />
                <FieldLabel for="status-inactive" class="font-normal cursor-pointer">Inactive</FieldLabel>
              </Field>
            </RadioGroup>
            <FieldError v-if="errors.length" :errors="errors.map(e => ({ message: e }))" />
          </Field>
        </VeeField>
      </FieldGroup>
      <div class="flex justify-end gap-2">
        <Button type="submit">
          Save Changes
        </Button>
      </div>
    </form>
  </div>
</template>
`
