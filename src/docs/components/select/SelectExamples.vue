<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Select Examples</CardTitle>
      <CardDescription>Diferentes usos del componente Select</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <div class="space-y-2">
        <p class="text-sm font-medium">Basic</p>
        <Select>
          <SelectTrigger class="w-[280px]">
            <SelectValue placeholder="Selecciona una fruta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Manzana</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Arándano</SelectItem>
            <SelectItem value="grapes">Uvas</SelectItem>
            <SelectItem value="pineapple">Piña</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div class="space-y-2">
        <p class="text-sm font-medium">With disabled option</p>
        <Select>
          <SelectTrigger class="w-[280px]">
            <SelectValue placeholder="Selecciona un framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="nuxt">Nuxt</SelectItem>
            <SelectItem value="react" disabled>React (disabled)</SelectItem>
            <SelectItem value="astro">Astro</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </CardContent>
  </Card>
</template>
