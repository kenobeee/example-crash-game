import {useEffect} from 'react';

import {crashConfig} from '@components/games/crash/config';

import {useCrashStore} from '@components/games/crash/store';

const progress = (ms:number):number => Math.floor(100 * Math.pow(Math.exp(1), 0.00006 * ms)) / 100;

export const useCoefficient = () => {
    const setCoefficient = useCrashStore(store => store.setCoefficient);
    const decrementPreparingTimer = useCrashStore(store => store.decrementPreparingTimer);
    const roundStartDate = useCrashStore(store => store.roundStartDate);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);
    const isRoundEnding = useCrashStore(store => store.isRoundEnding);
    const isRoundPreparing = useCrashStore(store => store.isRoundPreparing);
    const startRound = useCrashStore(store => store.startRound);
    const endRound = useCrashStore(store => store.endRound);
    const startPrepare = useCrashStore(store => store.startPrepare);

    let roundGoingInterval:NodeJS.Timeout;
    let roundEndingTimeout:NodeJS.Timeout;
    let roundPreparingInterval:NodeJS.Timeout;

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isRoundRunning) {
            roundGoingInterval = setInterval(() => {
                const coefficient = progress(new Date().getTime() - roundStartDate);

                if (coefficient >= crashConfig.explosionCoefficient) {
                    endRound();
                }

                coefficient > 0 && setCoefficient(coefficient);
            }, crashConfig.coefficientUpdateInterval);

            return () => clearInterval(roundGoingInterval);
        }

    }, [isRoundRunning]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isRoundEnding) {
            roundEndingTimeout = setTimeout(() => {
                startPrepare();
            }, crashConfig.endingTime);

            return () => clearInterval(roundEndingTimeout);
        }
    }, [isRoundEnding]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isRoundPreparing) {
            const startPreparingTime = new Date().getTime();

            roundPreparingInterval = setInterval(() => {
                if (new Date().getTime() - startPreparingTime >= crashConfig.preparingTime * 1000) startRound();

                decrementPreparingTimer();
            }, 1000);

            return () => clearInterval(roundPreparingInterval);
        }
    }, [isRoundPreparing]);
};