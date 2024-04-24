import React, {useMemo} from 'react';
import {Container} from '@pixi/react';
import {AnimatedSprite, Sprite} from '@pixi/react-animated';
import {crashConfig} from '@components/games/crash/config';

type AirplaneBodyP = {
    flamesFrames:HTMLImageElement[]
};

const {canvas: {airplane}} = crashConfig;

export const AirplaneBody = ({flamesFrames}:AirplaneBodyP) => useMemo(() => (
    <Container>
        <Sprite
            image={require('/assets/img/games/crash/airplane.png')}
            width={airplane.width}
            height={airplane.height}/>
        <AnimatedSprite
            x={-70}
            y={50}
            width={180}
            height={80}
            anchor={0.5}
            angle={180}
            animationSpeed={1}
            isPlaying={true}
            // @ts-ignore
            images={flamesFrames}/>
    </Container>
), []);