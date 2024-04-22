import React from 'react';
import {Stage, Layer} from 'react-konva';
import styled from 'styled-components';

import {Airplane, AirportBackground, SkyBackground} from './parts';

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;

  background-color: #1d2023;
  border-radius: 16px;
  border: 2px solid rgba(0, 255, 196, 0.15);

  overflow: hidden;
`;

export const Canvas = () => (
    <Wrapper>
        <Stage width={1000} height={600}>
            <Layer>
                <SkyBackground/>
                <AirportBackground/>
                <Airplane/>
            </Layer>
        </Stage>
    </Wrapper>
);