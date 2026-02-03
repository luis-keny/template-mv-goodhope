<script setup lang="ts">
import { Minus, Plus } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { VisXYContainer, VisGroupedBar, VisAxis } from '@unovis/vue'

const goal = ref(350)

const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Drawer</CardTitle>
      <CardDescription>
        Un componente de cajón para Vue.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger as-child>
            <Button variant="outline">
              Open Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div class="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <div class="p-4 pb-0">
                <div class="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    class="h-8 w-8 shrink-0 rounded-full"
                    :disabled="goal <= 200"
                    @click="goal -= 10"
                  >
                    <Minus class="h-4 w-4" />
                    <span class="sr-only">Decrease</span>
                  </Button>
                  <div class="flex-1 text-center">
                    <div class="text-7xl font-bold tracking-tighter">
                      {{ goal }}
                    </div>
                    <div class="text-muted-foreground text-[0.70rem] uppercase">
                      Calories/day
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    class="h-8 w-8 shrink-0 rounded-full"
                    :disabled="goal >= 400"
                    @click="goal += 10"
                  >
                    <Plus class="h-4 w-4" />
                    <span class="sr-only">Increase</span>
                  </Button>
                </div>
                <div class="mt-3 h-[120px]">
                  <VisXYContainer :data="data" :height="120">
                    <VisGroupedBar 
                      :x="(_d: any, i: number) => i" 
                      :y="(d: any) => d.goal" 
                      color="hsl(var(--foreground))"
                      :opacity="0.9"
                    />
                  </VisXYContainer>
                </div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose as-child>
                  <Button variant="outline">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </CardContent>
  </Card>
</template>
