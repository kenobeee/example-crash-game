import React, {ReactNode, useMemo} from 'react';
import {Spring} from 'react-spring';
import {Container} from '@pixi/react-animated';

import {crashConfig} from '@components/games/crash/config';

import type {AnimatedFields} from '@components/games/crash/type';

const {animationTimeStampInterval} = crashConfig;

type AirplaneContainerP = {
    children:ReactNode
    fromTo:AnimatedFields
};

export const AirplaneContainer = ({children, fromTo}:AirplaneContainerP) =>
    useMemo(() => (
        <Spring
            {...fromTo}
            config={{duration: animationTimeStampInterval}}>
            {(props:any) =>
                <Container {...props}>
                    {children}
                </Container>}
        </Spring>
    
    ), [fromTo]);