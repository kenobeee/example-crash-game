import React, {useMemo} from 'react';
import {Spring} from 'react-spring';
import {Sprite} from '@pixi/react-animated';

import {animation, AnimationIteration} from '../animation';
import {useCrashStore} from '@lib/store/crash';

export const Airplane = () => {
    const animateTimeStamp = useCrashStore(store => store.animateTimeStamp);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);

    const physics = useMemo(():{
        from:AnimationIteration
        to:AnimationIteration
    } => ({
        from: animation.airplane[animateTimeStamp],
        to: animation.airplane[animateTimeStamp + 1]
    }), [animateTimeStamp, isRoundRunning]);

    return (
        // @ts-ignore
        <Spring native {...physics} config={{duration: 1000}}>
            {(props) =>
                <Sprite image={require('/assets/img/airplane.png')} {...props} />}
        </Spring>
    );
};