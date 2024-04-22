import React, {useCallback} from 'react';
import styled from 'styled-components';
import {useCrashStore} from '@lib/store/crash';

const Wrapper = styled.div`
  margin-top: 40px;
  
  width: 100%;
`;

const StartButton = styled.button`
  padding: 14px 8px;

  background-color: #fff;
`;

export const ControlPanel = () => {
    const setIsRoundRunning = useCrashStore(store => store.setIsRoundRunning);
    const setRoundStartDate = useCrashStore(store => store.setRoundStartDate);

    const startGame = useCallback(() => {
        setRoundStartDate(new Date().getTime());
        setIsRoundRunning(true);
    }, []);

    return (
        <Wrapper>
            <StartButton onClick={startGame}>
                Start
            </StartButton>
        </Wrapper>
    );
};