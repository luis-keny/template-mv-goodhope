<script setup lang="ts">
import ButtonExamples from './ButtonExamples.vue'
import { buttonExamplesCode } from '@/docs/snippets/buttonExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(buttonExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <ButtonExamples />
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
        <CodeBlock :code="buttonExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props of the Button component</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props</p>
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
                <TableCell>variant</TableCell>
                <TableCell>"default" | "secondary" | "tertiary" | "outline" | "ghost" | "link" | "destructive"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Visual style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell>"xs" | "sm" | "default" | "lg" | "icon" | "icon-sm" | "icon-lg"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Control size and spacing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Extra classes appended to the button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>as</TableCell>
                <TableCell>string</TableCell>
                <TableCell>"button"</TableCell>
                <TableCell>Rendered tag via Primitive (e.g., "a")</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>asChild</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Render as child (useful to wrap custom components)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            Events are forwarded from the underlying element (e.g., click, focus). No custom events are emitted.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
