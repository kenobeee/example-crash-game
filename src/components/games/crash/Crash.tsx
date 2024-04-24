import React, {useState} from 'react';
import styled from 'styled-components';

import {Canvas, ControlPanel} from './parts';
import {colorSchema} from '@lib/constants';
import {useCrashStore} from '@lib/store/crash';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StartMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.75);

  z-index: 9;
`;

const StartText = styled.span`
  color: ${colorSchema.accentText};
  font-size: 1.6rem;
  font-weight: 600;
  user-select: none;
`;

export const Crash = () => {
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const init = useCrashStore(store => store.startPrepare);

    return (
        <Wrapper>
            {!isStarted &&
                <StartMenu onClick={() => {
                    setIsStarted(true);
                    setTimeout(() => init(), 0);
                }}>
                    <StartText>
                        Нажмите для старта
                    </StartText>
                </StartMenu>}
            <>
                <Canvas/>
                <ControlPanel/>
            </>
        </Wrapper>
    );
};
