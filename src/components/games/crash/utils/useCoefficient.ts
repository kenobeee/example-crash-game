import {useEffect, useState} from 'react';

import {crashConfig} from '@config';

import {useCrashStore} from '@lib/store/crash';

type UseCoefficient = (props:{
    startDate:number
    isRoundRunning:boolean
}) => void;

const progress = (ms:number):number => Math.floor(100 * Math.pow(Math.exp(1), 0.00006 * ms)) / 100;

export const useCoefficient:UseCoefficient = (props) => {
    const {startDate, isRoundRunning} = props;
    const setCoefficient = useCrashStore(store => store.setCoefficient);

    let interval:NodeJS.Timeout;

    const [animateTimeStamp, setAnimateTimeStamp] = useState<number>(0);

    useEffect(() => {
        if (isRoundRunning) {
            interval = setTimeout(() => {
                const coefficient = progress(new Date().getTime() - startDate);

                setCoefficient(coefficient);
                setAnimateTimeStamp(prev => prev + 1);
            }, crashConfig.coefficientUpdateInterval);

            return () => clearInterval(interval);
        }

        return () => {
            setAnimateTimeStamp(0);
            setCoefficient(0);
        };
    }, [isRoundRunning, animateTimeStamp]);
};