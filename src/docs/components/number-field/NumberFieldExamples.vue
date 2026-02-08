<script setup lang="ts">
import { Label } from '@/components/ui/label'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
</script>

<template>
  <div class="flex justify-center w-full">
    <NumberField id="age" :default-value="18" :min="0" class="w-full max-w-[200px]">
      <Label for="age">Age</Label>
      <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>
  </div>
</template>

