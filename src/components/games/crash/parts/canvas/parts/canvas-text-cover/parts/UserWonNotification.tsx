import React from 'react';
import styled, {keyframes} from 'styled-components';

import type {ICrashState} from '@components/games/crash/type';

type UserWonNotificationP = {
    value:ICrashState['userWon']
};

const PopupAnimation = keyframes`
  0% {
    transform: translate(-50%, 0);
    opacity: 0;
    visibility: hidden;
  }
  70% {
    transform: translate(-50%, -2%);
    opacity: 1;
    visibility: visible;
  }
  100% {
    transform: translate(-50%, -4%);
    opacity: 0;
    visibility: hidden;
  }
`;

const Wrapper = styled.div<{isActive:boolean}>`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translate(-50%, 0);

  padding: 20px 40px;

  width: fit-content;
  height: fit-content;

  background-color: #fff;
  border-radius: 8px;
  
  font-size: 1.1rem;
  font-weight: 500;

  opacity: 0;
  visibility: hidden;
  
  animation: 3s forwards ease-in-out;
  animation-name: ${props => props.isActive ? PopupAnimation : 'none'};
`;

export const UserWonNotification = (props:UserWonNotificationP) => {
    const {value} = props;

    return (
        <Wrapper isActive={!!value}>Вы выиграли {value}$!</Wrapper>
    );
};