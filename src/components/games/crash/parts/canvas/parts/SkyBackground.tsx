import React, {useMemo} from 'react';
import {Spring} from 'react-spring';
import {Sprite} from '@pixi/react-animated';

import {crashConfig} from '@config';

import {animation, AnimationIteration} from '../animation';
import {useCrashStore} from '@lib/store/crash';

export const SkyBackground = () => {
    const animateTimeStamp = useCrashStore(store => store.animateTimeStamp);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);

    const physics = useMemo(():{
        from:AnimationIteration
        to:AnimationIteration
    } => ({
        from: animation.sky[animateTimeStamp],
        to: animation.sky[animateTimeStamp + 1]
    }), [animateTimeStamp, isRoundRunning]);

    return (
        // @ts-ignore
        <Spring native {...physics} config={{duration: crashConfig.animationTimeStampInterval}}>
            {(props) =>
                <Sprite image={require('/assets/img/sky-bg.jpg')} {...props} />}
        </Spring>
    );
};