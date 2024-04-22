import React, {useEffect, useState} from 'react';
import {Image} from 'react-konva';

export const SkyBackground = () => {
    const [image, setImage] = useState();

    useEffect(() => {
        const image = new window.Image();

        image.src = require('/assets/img/sky-bg.jpg');
        // @ts-ignore
        image.addEventListener('load', () => setImage(image));
    }, []);

    return (
        <>
            <Image image={image} width={2500} height={1600} x={0} y={0}/>
        </>
    );
};