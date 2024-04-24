import React from 'react';
import styled from 'styled-components';

import {CoefficientView, PreparingTimerView} from './parts';

import {useCrashStore} from '@lib/store/crash';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
  
  user-select: none;
`;

const SomeValue = styled.div`
  margin-top: -20%;
`;

export const CanvasTextCover = () => {
    const isRoundPreparing = useCrashStore(store => store.isRoundPreparing);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);
    const isRoundEnding = useCrashStore(store => store.isRoundEnding);

    return (
        <Wrapper>
            <SomeValue>
                {isRoundPreparing
                    ? <PreparingTimerView/>
                    : (isRoundRunning || isRoundEnding)
                        ? <CoefficientView/>
                        : <></>}
            </SomeValue>
        </Wrapper>
    );
};