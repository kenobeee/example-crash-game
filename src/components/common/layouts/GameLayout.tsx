import React, {ReactNode} from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  
  height: 100%;
  max-width: 1440px;
`;

export const GameLayout = ({children}:{children:ReactNode}) => <Outer><Inner>{children}</Inner></Outer>;