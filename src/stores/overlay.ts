import { reactive } from 'vue'

interface OverlayState<T = unknown> {
  isOpen: boolean
  data: T | null
}

const overlays = reactive<Record<string, OverlayState>>({})

function createOverlayState<T>(data: T | null = null): OverlayState<T> {
  return {
    isOpen: false,
    data,
  }
}

export const useOverlayStore = () => {
  const open = <T = unknown>(id: string, data: T | null = null) => {
    overlays[id] = {
      ...createOverlayState(data),
      isOpen: true,
    }
  }

  const close = (id: string) => {
    if (overlays[id]) {
      overlays[id].isOpen = false
    }
  }

  const toggle = <T = unknown>(id: string, data: T | null = null) => {
    if (overlays[id]?.isOpen) {
      close(id)
    } else {
      open(id, data)
    }
  }

  const getOverlay = <T = unknown>(id: string): OverlayState<T> => {
    if (!overlays[id]) {
      overlays[id] = createOverlayState()
    }

    return overlays[id] as OverlayState<T>
  }

  return {
    open,
    close,
    toggle,
    getOverlay,
  }
}
