import React, {ReactNode, useMemo} from 'react';
import {Spring} from 'react-spring';
import {Container} from '@pixi/react-animated';

import {crashConfig} from '@config';

import {AnimatedFields} from '@components/games/crash/utils/useAnimationTimeStamp';

const {animationTimeStampInterval} = crashConfig;

export const AirplaneContainer = ({children, fromTo}:{children:ReactNode, fromTo:AnimatedFields}) =>
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