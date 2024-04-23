import React from 'react';
import {AnimatedSprite} from '@pixi/react-animated';

const TOTAL_FRAMES:number = 60;

// @ts-ignore
const images = Array(TOTAL_FRAMES).fill().map((_, i) => require(`/assets/img/games/crash/explosion/${i}.png`));

export const Explosion = () => (
    <AnimatedSprite
        x={100}
        y={25}
        anchor={0.5}
        width={300}
        height={300}
        animationSpeed={1}
        isPlaying={true}
        images={images}/>
);