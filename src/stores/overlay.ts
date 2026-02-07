import { reactive } from 'vue'

interface OverlayState {
  isOpen: boolean
  data: any
}

const overlays = reactive<Record<string, OverlayState>>({})

export const useOverlayStore = () => {
  const open = (id: string, data: any = null) => {
    overlays[id] = {
      isOpen: true,
      data
    }
  }

  const close = (id: string) => {
    if (overlays[id]) {
      overlays[id].isOpen = false
    }
  }

  const toggle = (id: string, data: any = null) => {
    if (overlays[id]?.isOpen) {
      close(id)
    } else {
      open(id, data)
    }
  }

  const getOverlay = (id: string) => {
    if (!overlays[id]) {
      overlays[id] = { isOpen: false, data: null }
    }
    return overlays[id]
  }

  return {
    open,
    close,
    toggle,
    getOverlay
  }
}
