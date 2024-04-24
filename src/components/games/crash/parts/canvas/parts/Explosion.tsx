import React from 'react';
import {AnimatedSprite} from '@pixi/react-animated';
import {crashConfig} from '@config';

const TOTAL_FRAMES:number = 60;

// @ts-ignore
const images = Array(TOTAL_FRAMES).fill().map((_, i) => require(`/assets/img/games/crash/explosion/${i}.png`));

export const Explosion = () => (
    <AnimatedSprite
        x={(crashConfig.canvas.airplane.width / 2) - (crashConfig.canvas.explosion.width / 2)}
        y={(crashConfig.canvas.airplane.height / 2) - (crashConfig.canvas.explosion.height / 2)}
        width={crashConfig.canvas.explosion.width}
        height={crashConfig.canvas.explosion.height}
        animationSpeed={0.5}
        isPlaying={true}
        images={images}/>
);