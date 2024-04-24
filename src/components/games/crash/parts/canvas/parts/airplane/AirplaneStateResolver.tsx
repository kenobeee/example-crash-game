import React from 'react';

import {AirplaneBody, Explosion} from './parts';
import {AirplaneContainer} from './AirplaneContainer';

import {useCrashStore} from '@components/games/crash/store';

import type {AnimatedFields} from '@components/games/crash/type';
import {useAnimatedImages} from '@components/games/crash/utils';

type AirplaneStateResolverP = AnimatedFields;

export const AirplaneStateResolver = (fromTo:AirplaneStateResolverP) => {
    const isRoundEnding = useCrashStore(store => store.isRoundEnding);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);

    const {flames, explosion} = useAnimatedImages();

    return (
        <AirplaneContainer fromTo={fromTo}>
            {isRoundEnding
                ? <Explosion explosionFrames={explosion}/>
                : isRoundRunning
                    ? <AirplaneBody flamesFrames={flames}/>
                    : <></>}
        </AirplaneContainer>
    );
};