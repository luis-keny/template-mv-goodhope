<script setup lang="ts">
import { Bold, Italic, Underline } from 'lucide-vue-next'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Toggle Group</CardTitle>
      <CardDescription>
        Un conjunto de botones de alternancia de dos estados que se pueden alternar activados o desactivados.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <ToggleGroup variant="outline" type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline class="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </CardContent>
  </Card>
</template>
