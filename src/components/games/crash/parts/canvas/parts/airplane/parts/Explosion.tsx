import React, {useMemo} from 'react';
import {AnimatedSprite} from '@pixi/react-animated';
import {crashConfig} from '@components/games/crash/config';

type ExplosionP = {
    explosionFrames:HTMLImageElement[]
};

const {canvas: {airplane, explosion}} = crashConfig;

export const Explosion = ({explosionFrames}:ExplosionP) => useMemo(() => (
    <AnimatedSprite
        x={(airplane.width / 2) - (explosion.width / 2)}
        y={(airplane.height / 2) - (explosion.height / 2)}
        width={explosion.width}
        height={explosion.height}
        animationSpeed={0.5}
        isPlaying={true}
        // @ts-ignore
        images={explosionFrames}/>
), []);