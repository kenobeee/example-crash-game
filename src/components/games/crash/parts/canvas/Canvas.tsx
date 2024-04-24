import React from 'react';
import styled from 'styled-components';
import {Stage, Container} from '@pixi/react';

import {colorSchema} from '@lib/constants';
import {crashConfig} from '@components/games/crash/config';

import {AirportBackground, CityBackground, CanvasTextCover, Airplane} from './parts';

import {useCoefficient, useAnimationTimeStamp} from '../../utils';

const Wrapper = styled.div`
  position: relative;
  
  width: fit-content;
  height: fit-content;

  background-color: ${colorSchema.secondaryBg};
  border-radius: 16px;
  border: 2px solid ${colorSchema.accent};

  overflow: hidden;
`;

const {canvas: {stage}} = crashConfig;

export const Canvas = () => {
    useCoefficient();
    const {
        cityBackgroundFrameIteration,
        airportBackgroundFrameIteration,
        airplaneFrameIteration
    } = useAnimationTimeStamp();

    return (
        <Wrapper>
            <Stage
                width={stage.width}
                height={stage.height}>
                <Container>
                    <CityBackground {...cityBackgroundFrameIteration}/>
                    <AirportBackground {...airportBackgroundFrameIteration}/>
                    <Airplane {...airplaneFrameIteration}/>
                </Container>
            </Stage>
            <CanvasTextCover/>
        </Wrapper>
    );
};