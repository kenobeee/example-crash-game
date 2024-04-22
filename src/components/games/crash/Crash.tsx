import React from 'react';
import styled from 'styled-components';

import {Canvas, ControlPanel} from './parts';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Crash = () => (
    <Wrapper>
        <Canvas/>
        <ControlPanel/>
    </Wrapper>
);
