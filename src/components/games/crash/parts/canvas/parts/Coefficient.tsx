import React from 'react';
import styled from 'styled-components';

import {colorSchema} from '@lib/constants';
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

const StyledCoefficient = styled.h1`
  margin-top: -20%;
  
  font-size: 6rem;
  color: ${colorSchema.accentText};
  font-weight: 600;
  text-shadow: #000 2px 2px 16px;
`;

const presentableCoefficient = (ms:number):string => `${ms.toFixed(2)}x`;

export const Coefficient = () => {
    const value = useCrashStore(store => store.coefficient);

    return (
        <Wrapper>
            <StyledCoefficient>
                {presentableCoefficient(value)}
            </StyledCoefficient>
        </Wrapper>
    );
};