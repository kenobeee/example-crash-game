import React, {useEffect, useState} from 'react';
import {Image} from 'react-konva';

export const AirportBackground = () => {
    const [image, setImage] = useState();

    useEffect(() => {
        const image = new window.Image();

        image.src = require('/assets/img/airport-bg.png');
        // @ts-ignore
        image.addEventListener('load', () => setImage(image));
    }, []);

    return (
        <>
            <Image
                image={image}
                width={1000}
                height={300}
                x={0}
                y={360}/>
        </>
    );
};