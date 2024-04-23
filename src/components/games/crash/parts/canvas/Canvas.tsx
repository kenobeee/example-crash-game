import React from 'react';
import styled from 'styled-components';
import {Stage, Container} from '@pixi/react';

import {colorSchema} from '@lib/constants';

import {Airplane, AirportBackground, SkyBackground, Coefficient, Explosion} from './parts';

import {useCoefficient, useAnimationTimeStamp} from '../../utils';
import {Sprite} from '@pixi/react-animated';
import {useCrashStore} from '@lib/store/crash';

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
            <Stage width={1000} height={600}>
                <Container>
                    <SkyBackground/>
                    <AirportBackground/>
                    <Airplane>
                        {isRoundEnding
                            ? <Explosion/>
                            : <Sprite image={require('/assets/img/airplane.png')} width={200} height={50}/>}
                    </Airplane>
                </Container>
            </Stage>
            <Coefficient/>
        </Wrapper>
    );
};