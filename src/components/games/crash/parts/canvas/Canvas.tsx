import React from 'react';
import styled from 'styled-components';
import {Stage, Container} from '@pixi/react';

import {colorSchema} from '@lib/constants';

import {AirplaneContainer, AirportBackground, SkyBackground, Coefficient, Explosion, AirplaneBody} from './parts';

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

export const Canvas = () => {
    const isRoundEnding = useCrashStore(store => store.isRoundEnding);

    useCoefficient();
    useAnimationTimeStamp();

    return (
        <Wrapper>
            <Stage
                width={crashConfig.canvas.stage.width}
                height={crashConfig.canvas.stage.height}>
                <Container>
                    <SkyBackground/>
                    <AirportBackground/>
                    <AirplaneContainer>
                        {isRoundEnding
                            ? <Explosion/>
                            : <AirplaneBody/>}
                    </AirplaneContainer>
                </Container>
            </Stage>
            <Coefficient/>
        </Wrapper>
    );
};