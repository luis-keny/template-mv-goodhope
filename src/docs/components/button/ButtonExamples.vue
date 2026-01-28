<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Plus, Search, Check, Trash2 } from 'lucide-vue-next'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Button Examples</CardTitle>
      <CardDescription>Variants and sizes available</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <div class="space-y-2">
        <p class="text-sm font-medium">Variants</p>
        <div class="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
      <div class="space-y-2">
        <p class="text-sm font-medium">Sizes</p>
        <div class="flex flex-wrap items-center gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="default">Default</Button>
          <Button size="lg">LG</Button>
        </div>
      </div>
      <div class="space-y-2">
        <p class="text-sm font-medium">Icons</p>
        <div class="flex flex-wrap items-center gap-2">
          <Button size="icon" aria-label="Add"><Plus /></Button>
          <Button size="icon-sm" variant="secondary" aria-label="Search"><Search /></Button>
          <Button size="icon-lg" variant="outline" aria-label="Confirm"><Check /></Button>
          <Button variant="destructive"><Trash2 /><span>Delete</span></Button>
          <Button variant="default"><Plus /><span>Add</span></Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
