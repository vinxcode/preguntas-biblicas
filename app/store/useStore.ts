import { create } from 'zustand'

interface UseStore {
    isPreguntaModalOpen: boolean
    preguntaModal: number,
    currentDeck: string,
    updatePreguntaModal: (idPregunta: number) => void,
    updateCurrentDeck: (deck: string) => void,
    updateIsPreguntaModalOpen: (isOpen: boolean) => void
}

export const useStore = create<UseStore>()((set) => ({
    isPreguntaModalOpen: false,
    preguntaModal: 0,
    currentDeck: "",
    updatePreguntaModal: (idPregunta) => set((state) => ({ preguntaModal: idPregunta  })),
    updateIsPreguntaModalOpen: (isOpen) => set((state) => ({ isPreguntaModalOpen: isOpen  })),
    updateCurrentDeck: (deck) => set((state) => ({ currentDeck: deck }))
}))