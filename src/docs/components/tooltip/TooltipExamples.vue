<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Tooltip</CardTitle>
      <CardDescription>
        Una ventana emergente que muestra información relacionada con un elemento cuando el elemento recibe el foco del teclado o el ratón se desplaza sobre él.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="outline">
              Hover
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </CardContent>
  </Card>
</template>
