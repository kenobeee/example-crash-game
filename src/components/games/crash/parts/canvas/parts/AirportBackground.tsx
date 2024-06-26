import React, {useMemo} from 'react';
import {Spring} from 'react-spring';
import {Sprite} from '@pixi/react-animated';

import {crashConfig} from '@components/games/crash/config';

import type {AnimatedFields} from '../../../type';

const {animationTimeStampInterval, canvas} = crashConfig;
const {airport: {width, height}} = canvas;

export const AirportBackground = (fromTo:AnimatedFields) => useMemo(() => (
    <Spring {...fromTo} config={{duration: animationTimeStampInterval}}>
        {(props:any) =>
            <Sprite
                {...props}
                width={width}
                height={height}
                image={require('/assets/img/games/crash/airport-bg.png')}/>}
    </Spring>
), [fromTo]);