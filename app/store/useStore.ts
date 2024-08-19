import { create } from 'zustand'

interface UseStore {
    isPreguntaModalOpen: boolean
    preguntaModal: number,
    updatePreguntaModal: (idPregunta: number) => void,
    updateIsPreguntaModalOpen: (isOpen: boolean) => void
}

export const useStore = create<UseStore>()((set) => ({
    isPreguntaModalOpen: false,
    preguntaModal: 0,
    updatePreguntaModal: (idPregunta) => set((state) => ({ preguntaModal: idPregunta  })),
    updateIsPreguntaModalOpen: (isOpen) => set((state) => ({ isPreguntaModalOpen: isOpen  })),
}))