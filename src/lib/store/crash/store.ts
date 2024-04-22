import {create} from 'zustand';

export interface ICrashState {
    coefficient:number
    animateTimeStamp:number
    roundStartDate:number
    isRoundRunning:boolean
}

export interface ICrashActions {
    setCoefficient:(value:ICrashState['coefficient']) => void
    setAnimateTimeStamp:(value:ICrashState['animateTimeStamp']) => void
    setRoundStartDate:(ms:ICrashState['roundStartDate']) => void
    setIsRoundRunning:(isRunning:ICrashState['isRoundRunning']) => void
}

export type CrashStore = ICrashState & ICrashActions;

export const useCrashStore = create<CrashStore>((set) =>
    ({
        coefficient: 1,
        animateTimeStamp: 0,
        roundStartDate: 0,
        isRoundRunning: false,
        setCoefficient: (value) => set(state => ({
            ...state,
            coefficient: value
        })),
        setAnimateTimeStamp: (value) => set(state => ({
            ...state,
            animateTimeStamp: value
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