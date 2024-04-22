import React from 'react';

import {Crash} from '@components/games';
import {GameLayout} from '@components/common';

import BaseStyles from './Base.styled';

export const App = () => (
    <>
        <BaseStyles/>
        <GameLayout>
            <Crash/>
        </GameLayout>
    </>
);