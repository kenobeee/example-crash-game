import React from 'react';
import styled from 'styled-components';

import {colorSchema} from '@lib/constants';

type CoefficientP = {
    value:number
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
`;

const StyledCoefficient = styled.h1`
  font-size: 4rem;
  color: ${colorSchema.accentText};
  font-weight: 600;
`;

const presentableCoefficient = (ms:number):string => `${ms.toFixed(2)}x`;

export const Coefficient = (props:CoefficientP) => {
    const {value} = props;

    return (
        <Wrapper>
            <StyledCoefficient>
                {presentableCoefficient(value)}
            </StyledCoefficient>
        </Wrapper>
    );
};