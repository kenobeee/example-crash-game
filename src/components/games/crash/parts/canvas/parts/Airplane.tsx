import React, {ReactNode, useMemo} from 'react';
import {Spring} from 'react-spring';
import {Container} from '@pixi/react-animated';

import {crashConfig} from '@config';

import {animation, AnimationIteration} from '../animation';
import {useCrashStore} from '@lib/store/crash';

export const Airplane = ({children}:{children:ReactNode}) => {
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
        <>
            <Spring {...physics} config={{duration: crashConfig.animationTimeStampInterval}}>
                {(props:any) =>
                    <Container {...props}>
                        {children}
                    </Container>}
            </Spring>
        </>
    );
};