<script setup lang="ts">
import InputOTPExamples from './InputOTPExamples.vue'
import { inputOTPExamplesCode } from '@/docs/snippets/inputOTPExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(inputOTPExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer 
      :code="inputOTPExamplesCode"
      title="Input OTP"
      description="Un input especializado para códigos de un solo uso (OTP)."
    >
      <InputOTPExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente InputOTP</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">InputOTP</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Por defecto</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>maxlength</TableCell>
                <TableCell>number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El número máximo de caracteres permitidos.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>modelValue</TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor del input.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
