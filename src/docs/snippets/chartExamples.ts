export const chartExamplesCode = `<script setup lang="ts">
import type {
  ChartConfig,
} from "@/components/ui/chart"

import { VisAxis, VisGroupedBar, VisXYContainer } from "@unovis/vue"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from "@/components/ui/chart"
import { computed, ref } from "vue"

const description = "An interactive line chart"

const chartData = [
  { date: new Date("2024-04-01"), desktop: 222, mobile: 150 },
  { date: new Date("2024-04-02"), desktop: 97, mobile: 180 },
  { date: new Date("2024-04-03"), desktop: 167, mobile: 120 },
  { date: new Date("2024-04-04"), desktop: 242, mobile: 260 },
  { date: new Date("2024-04-05"), desktop: 373, mobile: 290 },
  { date: new Date("2024-04-06"), desktop: 301, mobile: 340 },
  { date: new Date("2024-04-07"), desktop: 245, mobile: 180 },
  { date: new Date("2024-04-08"), desktop: 409, mobile: 320 },
  { date: new Date("2024-04-09"), desktop: 59, mobile: 110 },
  { date: new Date("2024-04-10"), desktop: 261, mobile: 190 },
  { date: new Date("2024-04-11"), desktop: 327, mobile: 350 },
  { date: new Date("2024-04-12"), desktop: 292, mobile: 210 },
  { date: new Date("2024-04-13"), desktop: 342, mobile: 380 },
  { date: new Date("2024-04-14"), desktop: 137, mobile: 220 },
  { date: new Date("2024-04-15"), desktop: 120, mobile: 170 },
  { date: new Date("2024-04-16"), desktop: 138, mobile: 190 },
]

type Data = typeof chartData[number]

const chartConfig = {
  views: {
    label: "Page Views",
    color: undefined,
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const activeChart = ref("desktop")
const total = computed(() => ({
  desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
  mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
}))
</script>

<template>
  <Card class="py-4 sm:py-0">
    <CardHeader class="flex flex-col items-stretch border-b !p-0 sm:flex-row">
      <div class="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
        <CardTitle>Bar Chart - Interactive</CardTitle>
        <CardDescription>
          Showing total visitors for the last 3 months
        </CardDescription>
      </div>
      <div class="flex">
        <button
          v-for="chart in ['desktop', 'mobile'] as (keyof typeof chartConfig)[]"
          :key="chart"
          :data-active="activeChart === chart"
          class="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
          @click="activeChart = chart"
        >
          <span class="text-muted-foreground text-xs">
            {{ chartConfig[chart].label }}
          </span>
          <span class="text-lg leading-none font-bold sm:text-3xl">
            {{ total[chart as keyof typeof total].toLocaleString() }}
          </span>
        </button>
      </div>
    </CardHeader>
    <CardContent class="px-2 sm:p-6">
      <ChartContainer :config="chartConfig" class="aspect-auto h-[250px] w-full" cursor>
        <VisXYContainer
          :data="chartData"
          :margin="{ left: -24 }"
          :y-domain="[0, undefined]"
        >
          <VisGroupedBar
            :x="(d: Data) => d.date"
            :y="(d: Data) => d[activeChart as keyof typeof d]"
            :color="chartConfig[activeChart as keyof typeof chartConfig].color"
            :bar-padding="0.1"
            :rounded-corners="false"
          />
          <VisAxis
            type="x"
            :x="(d: Data) => d.date"
            :tick-line="false"
            :domain-line="false"
            :grid-line="false"
            :tick-format="(d: number) => {
              const date = new Date(d)
              return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })
            }"
          />
          <VisAxis
            type="y"
            :num-ticks="3"
            :tick-line="false"
            :domain-line="false"
          />
          <ChartTooltip />
          <ChartCrosshair
            :template="componentToString(chartConfig, ChartTooltipContent, {
              labelFormatter(d) {
                return new Date(d).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              },
            })"
            color="#0000"
          />
        </VisXYContainer>
      </ChartContainer>
    </CardContent>
  </Card>
</template>
`
