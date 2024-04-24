import {create} from 'zustand';

export interface ICrashState {
    coefficient:number
    preparingTimer:number
    roundStartDate:number
    userBet:number | null
    userWon:number | null
    isRoundRunning:boolean
    isRoundPreparing:boolean
    isRoundEnding:boolean
}

export interface ICrashActions {
    setCoefficient:(value:ICrashState['coefficient']) => void
    decrementPreparingTimer:() => void
    startRound:() => void
    startPrepare:() => void
    endRound:() => void
    bet:() => void
    won:() => void
}

export type CrashStore = ICrashState & ICrashActions;

export const DEFAULT_USER_BET_VALUE:number = 1;

export const useCrashStore = create<CrashStore>((set) =>
    ({
        coefficient: 1,
        preparingTimer: 5,
        roundStartDate: 0,
        userBet: null,
        userWon: null,
        isRoundRunning: false,
        isRoundPreparing: false,
        isRoundEnding: false,
        setCoefficient: (value) => set(state => ({
            ...state,
            coefficient: value
        })),
        decrementPreparingTimer: () => set(state => ({
            ...state,
            preparingTimer: state.preparingTimer - 1
        })),
        startRound: () => set(state => ({
            ...state,
            isRoundPreparing: false,
            isRoundRunning: true,
            roundStartDate: new Date().getTime()
        })),
        endRound: () => set(state => ({
            ...state,
            isRoundRunning: false,
            isRoundEnding: true
        })),
        startPrepare: () => set(state => ({
            ...state,
            isRoundEnding: false,
            isRoundPreparing: true,
            coefficient: 1,
            preparingTimer: 5,
            userBet: null,
            userWon: null,
        })),
        bet: () => set(state => ({
            ...state,
            userBet: DEFAULT_USER_BET_VALUE
        })),
        won: () => set(state => ({
            ...state,
            userWon: DEFAULT_USER_BET_VALUE * state.coefficient,
            userBet: null
        }))
    }));