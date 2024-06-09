import { create } from 'zustand'
import { DoctoresStore } from "../types";

export const useDoctoresStore = create<DoctoresStore>(
  (set, get) => ({
    doctores: [],
    setDoctores: (doctores: any[]) => set({ doctores }),
    especialidades: [],
    setEspecialidades: (especialidades: any[]) => set({ especialidades }),
  })
)
