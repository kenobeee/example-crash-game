import {create} from 'zustand';

import {crashConfig} from '@components/games/crash/config';

import type {CrashStore} from '@components/games/crash/type';

const {preparingTime, defaultUserBetValue} = crashConfig;

export const useCrashStore = create<CrashStore>((set) =>
    ({
        coefficient: 1,
        preparingTimer: preparingTime,
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
            preparingTimer: preparingTime,
            userBet: null,
            userWon: null,
        })),
        bet: () => set(state => ({
            ...state,
            userBet: defaultUserBetValue
        })),
        won: () => set(state => ({
            ...state,
            userWon: defaultUserBetValue * state.coefficient,
            userBet: null
        }))
    }));