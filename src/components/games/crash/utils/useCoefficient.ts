import {useEffect} from 'react';

import {crashConfig} from '@config';

import {useCrashStore} from '@lib/store/crash';

const progress = (ms:number):number => Math.floor(100 * Math.pow(Math.exp(1), 0.00006 * ms)) / 100;

export const useCoefficient = () => {
    const setCoefficient = useCrashStore(store => store.setCoefficient);
    const roundStartDate = useCrashStore(store => store.roundStartDate);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);

    let interval:NodeJS.Timeout;

    useEffect(() => {
        if (isRoundRunning) {
            interval = setInterval(() => {
                const coefficient = progress(new Date().getTime() - roundStartDate);

                if (coefficient >= crashConfig.explosionCoefficient) {
                    // alert('stop');
                }

                coefficient > 0 && setCoefficient(coefficient);
            }, crashConfig.coefficientUpdateInterval);

            return () => clearInterval(interval);
        }

        return () => setCoefficient(0);
    }, [isRoundRunning]);
};