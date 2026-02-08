<script setup lang="ts">
import { ref } from 'vue'
import NativeSelectDynamic, { type SelectItems } from './NativeSelectDynamic.vue'
import { Label } from '@/components/ui/label'

const selectedStatus = ref('')
const selectedFramework = ref('')

// Ejemplo 1: Lista plana de opciones
const statusOptions: SelectItems = [
  { value: 'todo', label: 'Todo' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
  { value: 'cancelled', label: 'Cancelled' },
]

// Ejemplo 2: Lista agrupada
const frameworkOptions: SelectItems = [
  {
    label: 'Frontend',
    options: [
      { value: 'vue', label: 'Vue.js' },
      { value: 'react', label: 'React' },
      { value: 'angular', label: 'Angular' },
    ]
  },
  {
    label: 'Backend',
    options: [
      { value: 'node', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'go', label: 'Go' },
    ]
  }
]
</script>

<template>
  <div class="space-y-8 w-full flex flex-col items-center">
    
    <!-- Simple Options -->
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="status-demo">Project Status</Label>
      <NativeSelectDynamic
        id="status-demo"
        v-model="selectedStatus"
        :items="statusOptions"
        placeholder="Select status"
      />
      <p class="text-sm text-muted-foreground">
        Selected: {{ selectedStatus || 'None' }}
      </p>
    </div>

    <!-- Grouped Options -->
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="framework-demo">Tech Stack (Grouped)</Label>
      <NativeSelectDynamic
        id="framework-demo"
        v-model="selectedFramework"
        :items="frameworkOptions"
        placeholder="Select a framework"
      />
      <p class="text-sm text-muted-foreground">
        Selected: {{ selectedFramework || 'None' }}
      </p>
    </div>

  </div>
</template>
