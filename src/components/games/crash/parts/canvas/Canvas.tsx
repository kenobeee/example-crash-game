import React from 'react';
import styled from 'styled-components';
import {Stage, Container} from '@pixi/react';

import {colorSchema} from '@lib/constants';

import {Airplane, AirportBackground, SkyBackground, Coefficient} from './parts';

import {useCoefficient, useAnimationTimeStamp} from '../../utils';

const Wrapper = styled.div`
  position: relative;
  
  width: fit-content;
  height: fit-content;

  background-color: ${colorSchema.secondaryBg};
  border-radius: 16px;
  border: ${colorSchema.border};

  overflow: hidden;
`;

export const Canvas = () => {
    useCoefficient();
    useAnimationTimeStamp();

    return (
        <Wrapper>
            <Stage width={1000} height={600}>
                <Container>
                    <SkyBackground/>
                    <AirportBackground/>
                    <Airplane/>
                </Container>
            </Stage>
            <Coefficient/>
        </Wrapper>
    );
};