import React from 'react';
import styled from 'styled-components';

import {colorSchema} from '@lib/constants';
import {useCrashStore} from '@components/games/crash/store';

const StyledTimer = styled.span`
  font-size: 6rem;
  color: ${colorSchema.accentText};
  font-weight: 600;
  text-shadow: #000 2px 2px 16px;
`;

export const PreparingTimerView = () => {
    const value = useCrashStore(store => store.preparingTimer);

    return (
        <StyledTimer>{value}</StyledTimer>
    );
};