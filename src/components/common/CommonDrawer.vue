<script setup lang="ts">
import { computed } from 'vue'
import { useOverlayStore } from '@/stores/overlay'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer'

interface Props {
  id: string
  title?: string
  description?: string
  showFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showFooter: true
})

const { getOverlay, close } = useOverlayStore()
const overlay = computed(() => getOverlay(props.id))

const handleUpdateOpen = (val: boolean) => {
  if (!val) close(props.id)
}
</script>

<template>
  <Drawer :open="overlay.isOpen" @update:open="handleUpdateOpen">
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader v-if="title || description">
          <DrawerTitle v-if="title">{{ title }}</DrawerTitle>
          <DrawerDescription v-if="description">
            {{ description }}
          </DrawerDescription>
        </DrawerHeader>

        <div class="p-4 pb-0">
          <slot :data="overlay.data" />
        </div>

        <DrawerFooter v-if="showFooter">
          <slot name="footer" :data="overlay.data" />
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>
