import React from 'react';
import styled from 'styled-components';

import {colorSchema} from '@lib/constants';

import {useCrashStore} from '@lib/store/crash';
import {DEFAULT_USER_BET_VALUE} from '@lib/store/crash/store';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 20px;
  
  width: 100%;
`;

const Button = styled.button`
  width: 300px;
  height: 80px;

  background-color: ${colorSchema.secondaryBg};
  border: 2px solid;
  border-radius: 8px;
  
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colorSchema.lighterAccentText};
  
  cursor: pointer;
  
  &:disabled {
    pointer-events: none;
    cursor: default;
  }
`;

const CashOutButtonStyled = styled(Button)`border-color: ${colorSchema.success}`;
const WaitingButtonStyled = styled(Button)`border-color: ${colorSchema.error}`;
const BetButtonStyled = styled(Button)`border-color: ${colorSchema.accent}`;

export const ControlPanel = () => {
    const coefficient = useCrashStore(store => store.coefficient);
    const isRoundRunning = useCrashStore(store => store.isRoundRunning);
    const isRoundPreparing = useCrashStore(store => store.isRoundPreparing);
    const userBet = useCrashStore(store => store.userBet);
    const bet = useCrashStore(store => store.bet);
    const won = useCrashStore(store => store.won);

    const isDidBetAndRoundGoing = userBet && isRoundRunning;
    const isDidNotBetAndRoundGoing = !userBet && !isRoundPreparing;
    const isDidBetAndRoundNotGoing = userBet && !isRoundRunning;
    const isDidNotBetAndRoundNotGoing = !userBet && isRoundPreparing;

    // eslint-disable-next-line consistent-return
    const resolver = () => {
        if (isDidBetAndRoundGoing)
            return <CashOutButtonStyled onClick={won}>
                Забрать ставку ${(DEFAULT_USER_BET_VALUE * coefficient).toFixed(2)}$
            </CashOutButtonStyled>;

        if (isDidNotBetAndRoundGoing)
            return <WaitingButtonStyled disabled>
                Ожидайте окончания...</WaitingButtonStyled>;

        if (isDidBetAndRoundNotGoing)
            return <WaitingButtonStyled disabled>
                Ожидайте старта...</WaitingButtonStyled>;

        if (isDidNotBetAndRoundNotGoing)
            return <BetButtonStyled onClick={bet}>
                Сделать ставку {DEFAULT_USER_BET_VALUE}$</BetButtonStyled>;
    };

    return (
        <Wrapper>
            {resolver()}
        </Wrapper>
    );
};