<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Aspect Ratio</CardTitle>
      <CardDescription>
        Muestra contenido dentro de una proporción deseada.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="w-[450px]">
        <AspectRatio :ratio="16 / 9" class="bg-muted rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          >
        </AspectRatio>
      </div>
    </CardContent>
  </Card>
</template>
