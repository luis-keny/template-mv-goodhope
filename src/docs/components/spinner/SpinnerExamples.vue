<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Spinner</CardTitle>
      <CardDescription>
        Un indicador de carga simple y personalizable.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex flex-col gap-6 justify-center items-center">
      <div class="flex items-center gap-2">
        <Spinner />
        <span>Loading...</span>
      </div>
      
      <div class="flex items-center gap-2">
        <Button disabled>
          <Spinner class="mr-2" />
          Processing Payment
        </Button>
      </div>

      <div class="flex items-center gap-2">
         <Spinner class="size-8 text-primary" />
         <span class="text-lg font-medium">Large Spinner</span>
      </div>
    </CardContent>
  </Card>
</template>
