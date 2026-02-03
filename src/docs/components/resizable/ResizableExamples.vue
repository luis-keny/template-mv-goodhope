<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Resizable</CardTitle>
      <CardDescription>
        Grupos de paneles redimensionables accesibles.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center p-6">
      <ResizablePanelGroup
        direction="horizontal"
        class="max-w-md rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel :default-size="50">
          <div class="flex h-[200px] items-center justify-center p-6">
            <span class="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel :default-size="50">
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel :default-size="25">
              <div class="flex h-full items-center justify-center p-6">
                <span class="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel :default-size="75">
              <div class="flex h-full items-center justify-center p-6">
                <span class="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </CardContent>
  </Card>
</template>
