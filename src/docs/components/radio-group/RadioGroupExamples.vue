<script setup lang="ts">
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Radio Group</CardTitle>
      <CardDescription>
        Un conjunto de botones de radio donde solo se puede seleccionar un item a la vez.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <RadioGroup default-value="comfortable">
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r1" value="default" />
          <Label for="r1">Default</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r2" value="comfortable" />
          <Label for="r2">Comfortable</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r3" value="compact" />
          <Label for="r3">Compact</Label>
        </div>
      </RadioGroup>
    </CardContent>
  </Card>
</template>
