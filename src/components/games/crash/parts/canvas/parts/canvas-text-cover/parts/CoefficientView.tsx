import React from 'react';
import styled from 'styled-components';

import {colorSchema} from '@lib/constants';
import {useCrashStore} from '@components/games/crash/store';

const StyledCoefficient = styled.span`
  font-size: 6rem;
  color: ${colorSchema.accentText};
  font-weight: 600;
  text-shadow: #000 2px 2px 16px;
`;

const presentableCoefficient = (ms:number):string => `${ms.toFixed(2)}x`;

export const CoefficientView = () => {
    const value = useCrashStore(store => store.coefficient);

    return (
        <StyledCoefficient>{presentableCoefficient(value)}</StyledCoefficient>
    );

};