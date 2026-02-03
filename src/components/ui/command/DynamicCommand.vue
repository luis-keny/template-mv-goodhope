<script setup lang="ts">
import type { Component } from 'vue'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

interface CommandItemProps {
  value: string
  label: string
  icon?: Component
  shortcut?: string
  disabled?: boolean
  onSelect?: (value: string) => void
}

interface CommandGroupProps {
  heading?: string
  items: CommandItemProps[]
}

interface Props {
  placeholder?: string
  emptyMessage?: string
  groups: CommandGroupProps[]
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Type a command or search...',
  emptyMessage: 'No results found.',
})
</script>

<template>
  <Command class="rounded-lg border shadow-md md:min-w-[450px]">
    <CommandInput :placeholder="placeholder" />
    <CommandList>
      <CommandEmpty>{{ emptyMessage }}</CommandEmpty>
      <template v-for="(group, index) in groups" :key="index">
        <CommandGroup :heading="group.heading">
          <CommandItem
            v-for="item in group.items"
            :key="item.value"
            :value="item.value"
            :disabled="item.disabled"
            @select="item.onSelect ? item.onSelect(item.value) : undefined"
          >
            <component :is="item.icon" v-if="item.icon" class="mr-2 h-4 w-4" />
            <span>{{ item.label }}</span>
            <CommandShortcut v-if="item.shortcut">
              {{ item.shortcut }}
            </CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator v-if="index < groups.length - 1" />
      </template>
    </CommandList>
  </Command>
</template>
