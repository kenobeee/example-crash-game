import React from 'react';
import {Container} from '@pixi/react';
import {AnimatedSprite, Sprite} from '@pixi/react-animated';
import {crashConfig} from '@config';

const TOTAL_FRAMES:number = 20;

export const AirplaneBody = () => {
    // @ts-ignore
    const images = Array(TOTAL_FRAMES).fill().map((_, i) => require(`/assets/img/games/crash/flames/${i}.png`));
    
    return (
        <Container>
            <Sprite
                image={require('/assets/img/airplane.png')}
                width={crashConfig.canvas.airplane.width}
                height={crashConfig.canvas.airplane.height}
            />
            <AnimatedSprite
                y={60}
                anchor={0.5}
                zIndex={9}
                angle={180}
                width={180}
                height={20}
                animationSpeed={1}
                isPlaying={true}
                images={images}/>
        </Container>
    );
};