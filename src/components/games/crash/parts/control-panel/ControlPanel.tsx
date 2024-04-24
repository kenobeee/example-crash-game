import React from 'react';
import styled from 'styled-components';

import {colorSchema} from '@lib/constants';

import {useCrashStore} from '@lib/store/crash';

const Wrapper = styled.div`
  margin-top: 40px;
  
  width: 100%;
`;

const StartButton = styled.button`
  width: 360px;
  height: 80px;

  background-color: ${colorSchema.secondaryBg};
  border: 1px solid ${colorSchema.border};
  
  font-size: 2rem;
  font-weight: 500;
  color: ${colorSchema.accentText};
  
  cursor: pointer;
`;

export const ControlPanel = () => {
    const startRound = useCrashStore(store => store.startRound);

    return (
        <Wrapper>
            <StartButton onClick={startRound}>
                Start
            </StartButton>
        </Wrapper>
    );
};