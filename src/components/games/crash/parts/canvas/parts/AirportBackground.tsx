import React, {useMemo} from 'react';
import {Spring} from 'react-spring';
import {Container, Sprite} from '@pixi/react-animated';

import {crashConfig} from '@config';

import {animation, AnimationIteration} from '../animation';
import {useCrashStore} from '@lib/store/crash';

export const AirportBackground = () => {
    const animateTimeStamp = useCrashStore(store => store.animateTimeStamp);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);

    const physics = useMemo(():{
        from:AnimationIteration
        to:AnimationIteration
    } => ({
        from: animation.airport[animateTimeStamp],
        to: animation.airport[animateTimeStamp + 1],
    }), [animateTimeStamp, isRoundRunning]);

    return (
        <>
            <Spring {...physics} config={{duration: crashConfig.animationTimeStampInterval}}>
                {(props:any) =>
                    <Container {...props}>
                        <Sprite
                            image={require('/assets/img/airport-bg.png')}
                            width={crashConfig.canvas.airport.width}
                            height={crashConfig.canvas.airport.height}/>
                        <Sprite
                            image={require('/assets/img/airport-bg.png')}
                            width={crashConfig.canvas.airport.width}
                            height={crashConfig.canvas.airport.height}
                            x={crashConfig.canvas.airport.width}/>
                    </Container>}
            </Spring>
        </>
    );
};