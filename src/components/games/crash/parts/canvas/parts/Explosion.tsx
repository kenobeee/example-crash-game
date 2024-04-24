import React, {useMemo} from 'react';
import {AnimatedSprite} from '@pixi/react-animated';
import {crashConfig} from '@config';

type ExplosionP = {
    explosionFrames:string[]
};

export const Explosion = ({explosionFrames}:ExplosionP) => useMemo(() => (
    <AnimatedSprite
        x={(crashConfig.canvas.airplane.width / 2) - (crashConfig.canvas.explosion.width / 2)}
        y={(crashConfig.canvas.airplane.height / 2) - (crashConfig.canvas.explosion.height / 2)}
        width={crashConfig.canvas.explosion.width}
        height={crashConfig.canvas.explosion.height}
        animationSpeed={0.5}
        isPlaying={true}
        images={explosionFrames}/>
), []);