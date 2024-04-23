import {useEffect} from 'react';

import {crashConfig} from '@config';

import {useCrashStore} from '@lib/store/crash';

const progress = (ms:number):number => Math.floor(100 * Math.pow(Math.exp(1), 0.00006 * ms)) / 100;

export const useCoefficient = () => {
    const setCoefficient = useCrashStore(store => store.setCoefficient);
    const roundStartDate = useCrashStore(store => store.roundStartDate);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);
    const isRoundEnding = useCrashStore(store => store.isRoundEnding);
    const isRoundPreparing = useCrashStore(store => store.isRoundPreparing);
    const setIsRoundRunning = useCrashStore(store => store.setIsRoundRunning);
    const setIsRoundEnding = useCrashStore(store => store.setIsRoundEnding);
    const setIsRoundPreparing = useCrashStore(store => store.setIsRoundPreparing);
    const setAnimateTimeStamp = useCrashStore(store => store.setAnimateTimeStamp);
    const setRoundStartDate = useCrashStore(store => store.setRoundStartDate);

    let roundGoingInterval:NodeJS.Timeout;
    let roundEndingInterval:NodeJS.Timeout;

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isRoundRunning) {
            roundGoingInterval = setInterval(() => {
                const coefficient = progress(new Date().getTime() - roundStartDate);

                if (coefficient >= crashConfig.explosionCoefficient) {
                    // alert('stop');
                    setIsRoundRunning(false);
                    setIsRoundEnding(true);
                }

                coefficient > 0 && setCoefficient(coefficient);
            }, crashConfig.coefficientUpdateInterval);

            return () => clearInterval(roundGoingInterval);
        }

        if (isRoundEnding) {
            setTimeout(() => {
                setIsRoundEnding(false);
                setIsRoundPreparing(true);
                setCoefficient(0);
            }, crashConfig.endingTime);

            return () => clearInterval(roundEndingInterval);
        }

        if (isRoundPreparing) {
            setCoefficient(1);
            setAnimateTimeStamp(0);

            setTimeout(() => {
                setIsRoundPreparing(false);
                setRoundStartDate(new Date().getTime());
                setIsRoundRunning(true);
            }, crashConfig.preparingTime);
        }

    }, [isRoundRunning, isRoundEnding]);
};