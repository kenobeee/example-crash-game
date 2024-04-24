import {create} from 'zustand';

export interface ICrashState {
    coefficient:number
    roundStartDate:number
    isRoundRunning:boolean
    isRoundPreparing:boolean
    isRoundEnding:boolean
}

export interface ICrashActions {
    setCoefficient:(value:ICrashState['coefficient']) => void
    startRound:() => void
    startPrepare:() => void
    endRound:() => void
}

export type CrashStore = ICrashState & ICrashActions;

export const useCrashStore = create<CrashStore>((set) =>
    ({
        coefficient: 1,
        roundStartDate: 0,
        isRoundRunning: false,
        isRoundPreparing: false,
        isRoundEnding: false,
        setCoefficient: (value) => set(state => ({
            ...state,
            coefficient: value
        })),
        startRound: () => set(state => ({
            ...state,
            isRoundPreparing: false,
            isRoundRunning: true,
            roundStartDate: new Date().getTime()
        })),
        startPrepare: () => set(state => ({
            ...state,
            isRoundEnding: false,
            isRoundPreparing: true,
            coefficient: 1
        })),
        endRound: () => set(state => ({
            ...state,
            isRoundRunning: false,
            isRoundEnding: true
        }))
    }));