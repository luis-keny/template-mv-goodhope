<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronsUpDownIcon, CheckIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { useCommand } from '@/components/ui/command'

type Item = { value: string; label: string }

const props = withDefaults(defineProps<{
  modelValue?: string
  items: Item[]
  placeholder?: string
  buttonClass?: string
  pageSize?: number
}>(), {
  modelValue: '',
  placeholder: 'Select...',
  pageSize: 100,
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
  (e: 'change', v: string | null): void
}>()

const open = ref(false)
const query = ref('')
const visibleCount = ref(props.pageSize)
const scrollRef = ref<HTMLDivElement | null>(null)
const selectedLabel = computed(() => {
  const found = props.items.find(i => i.value === props.modelValue)
  return found?.label ?? props.placeholder
})
const filteredItems = computed(() => {
  if (!query.value) return props.items
  const q = query.value.toLowerCase()
  return props.items.filter(i => i.label.toLowerCase().includes(q) || i.value.toLowerCase().includes(q))
})
const visibleItems = computed(() => filteredItems.value.slice(0, visibleCount.value))
const onSelect = (val: string) => {
  const next = props.modelValue === val ? '' : val
  emit('update:modelValue', next)
  emit('change', next || null)
  open.value = false
}

const tryLoadMore = () => {
  if (!scrollRef.value) return
  const el = scrollRef.value
  const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8
  if (nearBottom && visibleCount.value < filteredItems.value.length) {
    visibleCount.value = Math.min(visibleCount.value + props.pageSize, filteredItems.value.length)
  }
}

onMounted(() => {
  watch(() => open.value, (v) => {
    if (v) visibleCount.value = props.pageSize
  })
})

const Bridge = {
  setup() {
    const { filterState } = useCommand()
    watch(() => filterState.search, (v) => {
      query.value = v || ''
      visibleCount.value = props.pageSize
    }, { immediate: true })
    return () => null
  }
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-[200px] justify-between"
        :class="buttonClass"
      >
        {{ selectedLabel }}
        <ChevronsUpDownIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandInput :placeholder="`Search...`" />
        <Bridge />
        <div ref="scrollRef" class="max-h-[300px] overflow-y-auto" @scroll="tryLoadMore">
        <CommandList class="overflow-visible max-h-none">
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="item in visibleItems"
              :key="item.value"
              :value="item.value"
              @select="onSelect(item.value)"
            >
              <CheckIcon
                :class="cn('mr-2 h-4 w-4', modelValue === item.value ? 'opacity-100' : 'opacity-0')"
              />
              {{ item.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
        </div>
      </Command>
    </PopoverContent>
  </Popover>
  </template>
