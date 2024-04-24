import React, {useMemo} from 'react';
import styled from 'styled-components';
import {Stage, Container} from '@pixi/react';

import {colorSchema} from '@lib/constants';
import {crashConfig} from '@components/games/crash/config';

import {AirplaneContainer, AirportBackground, CityBackground, Coefficient, Explosion, AirplaneBody} from './parts';

import {useCoefficient, useAnimationTimeStamp} from '../../utils';
import {useCrashStore} from '@lib/store/crash';

const Wrapper = styled.div`
  position: relative;
  
  width: fit-content;
  height: fit-content;

  background-color: ${colorSchema.secondaryBg};
  border-radius: 16px;
  border: 2px solid ${colorSchema.accent};

  overflow: hidden;
`;

const TOTAL_EXPLOSION_FRAMES:number = 60;
const TOTAL_FlAMES_FRAMES:number = 20;
const {canvas: {stage}} = crashConfig;

export const Canvas = () => {
    const isRoundEnding = useCrashStore(store => store.isRoundEnding);
    const isRoundPreparing = useCrashStore(store => store.isRoundPreparing);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);

    useCoefficient();
    const {
        cityBackgroundFrameIteration,
        airportBackgroundFrameIteration,
        airplaneFrameIteration
    } = useAnimationTimeStamp(isRoundRunning, isRoundPreparing);

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
        <Wrapper>
            <Stage
                width={stage.width}
                height={stage.height}>
                <Container>
                    <CityBackground {...cityBackgroundFrameIteration}/>
                    <AirportBackground {...airportBackgroundFrameIteration}/>
                    <AirplaneContainer fromTo={airplaneFrameIteration}>
                        {isRoundEnding
                            ? <Explosion explosionFrames={explosion}/>
                            : isRoundRunning
                                ? <AirplaneBody flamesFrames={flames}/>
                                : <></>}
                    </AirplaneContainer>
                </Container>
            </Stage>
            <Coefficient/>
        </Wrapper>
    );
};