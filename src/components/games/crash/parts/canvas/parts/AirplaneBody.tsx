import React, {useMemo} from 'react';
import {Container} from '@pixi/react';
import {AnimatedSprite, Sprite} from '@pixi/react-animated';
import {crashConfig} from '@config';

type AirplaneBodyP = {
    flamesFrames:string[]
};

export const AirplaneBody = ({flamesFrames}:AirplaneBodyP) => useMemo(() => (
    <Container>
        <Sprite
            video={require('/assets/img/airplane.png')}
            width={crashConfig.canvas.airplane.width}
            height={crashConfig.canvas.airplane.height}/>
        <AnimatedSprite
            x={-70}
            y={50}
            anchor={0.5}
            angle={180}
            width={180}
            height={80}
            animationSpeed={1}
            initialFrame={0}
            isPlaying={true}
            images={flamesFrames}/>
    </Container>
), []);