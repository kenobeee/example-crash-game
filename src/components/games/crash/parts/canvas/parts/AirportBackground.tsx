import React, {useMemo} from 'react';
import {Spring} from 'react-spring';
import {Sprite} from '@pixi/react-animated';

import {crashConfig} from '@components/games/crash/config';

import {AnimatedFields} from '@components/games/crash/utils/useAnimationTimeStamp';

const {animationTimeStampInterval, canvas} = crashConfig;
const {airport: {width, height}} = canvas;

export const AirportBackground = (fromTo:AnimatedFields) => useMemo(() => (
    <Spring {...fromTo} config={{duration: animationTimeStampInterval}}>
        {(props:any) =>
            <Sprite
                {...props}
                width={width}
                height={height}
                image={require('/assets/img/airport-bg.png')}/>}
    </Spring>
), [fromTo]);