import React, {useEffect, useState} from 'react';
import {Image} from 'react-konva';

export const Airplane = () => {
    const [image, setImage] = useState();

    useEffect(() => {
        const image = new window.Image();

        image.src = require('/assets/img/airplane.png');
        // @ts-ignore
        image.addEventListener('load', () => setImage(image));
    }, []);

    return (
        <>
            <Image x={20} y={540} width={200} height={50} image={image}/>
        </>
    );
};