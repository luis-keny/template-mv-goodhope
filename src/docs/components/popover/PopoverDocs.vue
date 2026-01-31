<script setup lang="ts">
import PopoverExamples from './PopoverExamples.vue'
import { popoverExamplesCode } from '@/docs/snippets/popoverExamples'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(popoverExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <PopoverExamples />
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Source</CardTitle>
          <CardDescription>Copy and paste into your project</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copy</span>
          <span v-else>Copied</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="popoverExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Common props for Popover components</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">PopoverContent Props</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>align</TableCell>
                <TableCell>"start" | "center" | "end"</TableCell>
                <TableCell>"center"</TableCell>
                <TableCell>Alignment relative to trigger</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>side</TableCell>
                <TableCell>"top" | "right" | "bottom" | "left"</TableCell>
                <TableCell>"bottom"</TableCell>
                <TableCell>Side where the popover appears</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>sideOffset</TableCell>
                <TableCell>number</TableCell>
                <TableCell>4</TableCell>
                <TableCell>Offset distance from trigger</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Additional classes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            For full API details see the Reka UI documentation.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
