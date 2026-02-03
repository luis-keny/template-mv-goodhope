export const chartExamplesCode = `<script setup lang="ts">
import { VisGroupedBar, VisXYContainer, VisAxis } from '@unovis/vue'
import { ChartSingleTooltip, ChartTooltip } from '@/components/ui/chart'

const data = [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 150 },
  { month: 'Mar', value: 200 },
  { month: 'Apr', value: 180 },
  { month: 'May', value: 220 },
  { month: 'Jun', value: 170 },
]

const valueFormatter = (tick: number) => \`\${tick}\`
</script>

<template>
  <div class="w-full h-[300px]">
    <VisXYContainer :data="data" :height="300">
      <VisGroupedBar :x="(d: any) => d.month" :y="(d: any) => d.value" />
      <VisAxis type="x" />
      <VisAxis type="y" />
      <ChartSingleTooltip
        selector="[data-vis-grouped-bar-item]"
        index="month"
        :items="[{ name: 'Value', color: 'hsl(var(--primary))' }]"
        :value-formatter="valueFormatter"
        :custom-tooltip="ChartTooltip"
      />
    </VisXYContainer>
  </div>
</template>
`
