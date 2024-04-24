import React, {useMemo} from 'react';
import styled from 'styled-components';
import {Stage, Container} from '@pixi/react';

import {colorSchema} from '@lib/constants';

import {AirplaneContainer, AirportBackground, CityBackground, Coefficient, Explosion, AirplaneBody} from './parts';

import {useCoefficient, useAnimationTimeStamp} from '../../utils';
import {useCrashStore} from '@lib/store/crash';
import {crashConfig} from '@config';

const Wrapper = styled.div`
  position: relative;
  
  width: fit-content;
  height: fit-content;

  background-color: ${colorSchema.secondaryBg};
  border-radius: 16px;
  border: ${colorSchema.border};

  overflow: hidden;
`;

const TOTAL_EXPLOSION_FRAMES:number = 60;
const TOTAL_FlAMES_FRAMES:number = 20;

export const Canvas = () => {
    const isRoundEnding = useCrashStore(store => store.isRoundEnding);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);

    useCoefficient();
    useAnimationTimeStamp();

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
                width={crashConfig.canvas.stage.width}
                height={crashConfig.canvas.stage.height}>
                <Container>
                    <CityBackground/>
                    <AirportBackground/>
                    <AirplaneContainer>
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