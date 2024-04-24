import {useEffect, useState} from 'react';

import {crashConfig} from '@components/games/crash/config';

import {AnimationIteration, animationPath} from '@components/games/crash/config/animation';

import {useCrashStore} from '@lib/store/crash';

export type AnimatedFields = { from:AnimationIteration, to:AnimationIteration };

type UseAnimationTimeStamp = (isRoundRunning:boolean, isRoundPreparing:boolean) => {
    airplaneFrameIteration:AnimatedFields
    cityBackgroundFrameIteration:AnimatedFields
    airportBackgroundFrameIteration:AnimatedFields
};

const {airplane, cityBg, airport} = animationPath;

export const useAnimationTimeStamp:UseAnimationTimeStamp = (_, isRoundPreparing) => {
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);
    const [s, setS] = useState<number>(0);

    let interval:NodeJS.Timeout;

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isRoundRunning) {
            interval = setInterval(() =>
                setS(prev => prev + 1), crashConfig.animationTimeStampInterval);

            return () => clearInterval(interval);
        }

        if (isRoundPreparing) setS(0);
    }, [isRoundRunning, isRoundPreparing]);

    const getFields = (iteration:AnimationIteration[]):AnimatedFields => ({
        from: iteration[s],
        to: iteration[s + 1],
    });

    return {
        airplaneFrameIteration: getFields(airplane),
        airportBackgroundFrameIteration: getFields(airport),
        cityBackgroundFrameIteration: getFields(cityBg)
    };
};
