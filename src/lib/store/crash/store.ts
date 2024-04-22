import {create} from 'zustand';

export interface ICrashState {
    coefficient:number
    roundStartDate:number
    isRoundRunning:boolean
}

export interface ICrashActions {
    setCoefficient:(value:ICrashState['coefficient']) => void
    setRoundStartDate:(ms:ICrashState['roundStartDate']) => void
    setIsRoundRunning:(isRunning:ICrashState['isRoundRunning']) => void
}

export type CrashStore = ICrashState & ICrashActions;

export const useCrashStore = create<CrashStore>((set) =>
    ({
        coefficient: 1,
        roundStartDate: 0,
        isRoundRunning: false,
        setCoefficient: (value) => set(state => ({
            ...state,
            coefficient: value
        })),
        setRoundStartDate: (ms) => set(state => ({
            ...state,
            roundStartDate: ms
        })),
        setIsRoundRunning: (isRunning) => set(state => ({
            ...state,
            isRoundRunning: isRunning
        }))
    }));