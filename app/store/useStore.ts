import { create } from 'zustand'

interface UseStore {
    isPreguntaModalOpen: boolean
    updateIsPreguntaModalOpen: (isOpen: boolean) => void
}

export const useStore = create<UseStore>()((set) => ({
    isPreguntaModalOpen: false,
    updateIsPreguntaModalOpen: (isOpen) => set((state) => ({ isPreguntaModalOpen: isOpen  })),
}))