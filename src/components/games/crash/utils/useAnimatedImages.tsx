import {useMemo} from 'react';

const TOTAL_EXPLOSION_FRAMES:number = 60;
const TOTAL_FlAMES_FRAMES:number = 20;

type UseAnimatedImagesReturn = {
    flames:HTMLImageElement[]
    explosion:HTMLImageElement[]
};

export const useAnimatedImages = ():UseAnimatedImagesReturn => {
    const flames = useMemo(() =>
        Array(TOTAL_FlAMES_FRAMES)
            .fill('')
            .map((_, i) => {

                const image = new Image();

                image.src = `/assets/img/games/crash/flames/${i}.png`;

                return image;
            }), []);

    const explosion = useMemo(() =>
        Array(TOTAL_EXPLOSION_FRAMES)
            .fill('')
            .map((_, i) => {
                const image = new Image();

                image.src = `/assets/img/games/crash/explosion/${i}.png`;

                return image;
            }), []);

    return {flames, explosion};
};