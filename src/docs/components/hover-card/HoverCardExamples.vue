<script setup lang="ts">
import { CalendarDaysIcon } from 'lucide-vue-next'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Hover Card</CardTitle>
      <CardDescription>
        Para que los usuarios videntes obtengan una vista previa del contenido disponible detrás de un enlace.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <HoverCard>
        <HoverCardTrigger as-child>
          <Button variant="link">
            @nuxt
          </Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">
                @nuxt
              </h4>
              <p class="text-sm">
                The Vue Framework – The Progressive Web Framework.
              </p>
              <div class="flex items-center pt-2">
                <CalendarDaysIcon class="mr-2 h-4 w-4 opacity-70" />
                <span class="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </CardContent>
  </Card>
</template>
