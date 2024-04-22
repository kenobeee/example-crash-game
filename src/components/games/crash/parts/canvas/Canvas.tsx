import React from 'react';
import {Stage, Layer} from 'react-konva';
import styled from 'styled-components';

import {colorSchema} from '@lib/constants';

import {Airplane, AirportBackground, SkyBackground, Coefficient} from './parts';

import {useCoefficient} from '../../utils';
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