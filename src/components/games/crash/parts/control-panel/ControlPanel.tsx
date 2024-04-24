import React, {useCallback} from 'react';
import styled from 'styled-components';
import {useCrashStore} from '@lib/store/crash';
import {colorSchema} from '@lib/constants';

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