import { create } from 'zustand'

type CurrencyState = {
    myCurrency: string;
    setCurrency: (newCurrency : string) => void
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
    myCurrency:"",
    setCurrency: (newCurrency) => set({myCurrency:newCurrency})
}))

