import React from 'react';
import {Stage, Layer} from 'react-konva';
import styled from 'styled-components';

import {Airplane, AirportBackground, SkyBackground, Coefficient} from './parts';

import {useCoefficient} from '../../utils';
import {useCrashStore} from '@lib/store/crash';

const Wrapper = styled.div`
  position: relative;
  
  width: fit-content;
  height: fit-content;

  background-color: #1d2023;
  border-radius: 16px;
  border: 2px solid rgba(0, 255, 196, 0.15);

  overflow: hidden;
`;

export const Canvas = () => {
    const {isRoundRunning, roundStartDate, coefficient} = useCrashStore(store => store);

    useCoefficient({startDate: roundStartDate, isRoundRunning});

    return (
        <Wrapper>
            <Stage width={1000} height={600}>
                <Layer>
                    <SkyBackground/>
                    <AirportBackground/>
                    <Airplane/>
                </Layer>
            </Stage>
            <Coefficient value={coefficient}/>
        </Wrapper>
    );
};