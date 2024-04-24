import {useCrashStore} from '@lib/store/crash';
import React, {useMemo} from 'react';

import {AirplaneBody, Explosion} from './parts';
import {AirplaneContainer} from './AirplaneContainer';

import {AnimatedFields} from '@components/games/crash/utils/useAnimationTimeStamp';

type AirplaneStateResolverP = AnimatedFields;

const TOTAL_EXPLOSION_FRAMES:number = 60;
const TOTAL_FlAMES_FRAMES:number = 20;

export const AirplaneStateResolver = (fromTo:AirplaneStateResolverP) => {
    const isRoundEnding = useCrashStore(store => store.isRoundEnding);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);

    const flames = useMemo(() =>
        Array(TOTAL_FlAMES_FRAMES)
            .fill('')
            .map((_, i) =>
                require(`/assets/img/games/crash/flames/${i}.png`)), []);

    const explosion = useMemo(() =>
        Array(TOTAL_EXPLOSION_FRAMES)
            .fill('')
            .map((_, i) =>
                require(`/assets/img/games/crash/explosion/${i}.png`)), []);

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