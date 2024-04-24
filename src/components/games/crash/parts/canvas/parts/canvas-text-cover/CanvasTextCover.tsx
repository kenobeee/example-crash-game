import React from 'react';
import styled from 'styled-components';

import {CoefficientView, PreparingTimerView, UserWonNotification} from './parts';

import {useCrashStore} from '@components/games/crash/store';

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
    const userWon = useCrashStore(store => store.userWon);

    return (
        <Wrapper>
            <SomeValue>
                {isRoundPreparing
                    ? <PreparingTimerView/>
                    : (isRoundRunning || isRoundEnding)
                        ? <CoefficientView/>
                        : <></>}
            </SomeValue>
            <UserWonNotification value={userWon}/>
        </Wrapper>
    );
};