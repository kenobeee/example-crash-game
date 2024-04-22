import {useEffect} from 'react';

import {crashConfig} from '@config';

import {useCrashStore} from '@lib/store/crash';

export const useAnimationTimeStamp = () => {
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);
    const animateTimeStamp = useCrashStore(store => store.animateTimeStamp);
    const setAnimateTimeStamp = useCrashStore(store => store.setAnimateTimeStamp);

    let interval:NodeJS.Timeout;

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isRoundRunning) {
            interval = setInterval(() => {
                setAnimateTimeStamp(animateTimeStamp + 1);
            }, crashConfig.animationTimeStampInterval);

            return () => clearInterval(interval);
        }
    }, [isRoundRunning, animateTimeStamp]);
};