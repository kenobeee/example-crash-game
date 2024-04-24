import {useMemo} from 'react';

const TOTAL_EXPLOSION_FRAMES:number = 60;
const TOTAL_FlAMES_FRAMES:number = 20;

type UseAnimatedImagesReturn = {
    flames:string[]
    explosion:string[]
};

export const useAnimatedImages = ():UseAnimatedImagesReturn => {
    const flames = useMemo(() =>
        Array(TOTAL_FlAMES_FRAMES)
            .fill('')
            .map((_, i) =>
                require(`/assets/img/games/crash/flames/${i}.png`)), []);

    const explosion = useMemo(() =>
        Array(TOTAL_EXPLOSION_FRAMES)
            .fill('')
            .map((_, i) =>
                require(`/assets/img/games/crash/explosion/${i}.png`)), []);

    return {flames, explosion};
};