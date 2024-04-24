import {Size} from '@components/games/crash/parts/canvas/animation';

interface CrashConfig {
    coefficientUpdateInterval:number, // ms
    animationTimeStampInterval:number // ms
    explosionCoefficient:number // float | integer
    preparingTime:number // ms
    endingTime:number // ms
    canvas:{
        stage:Required<Size>
        airport:Required<Size>
        airplane:Required<Size>
        explosion:Required<Size>
    }
}

export const crashConfig:CrashConfig = {
    coefficientUpdateInterval: 10,
    animationTimeStampInterval: 500,
    explosionCoefficient: 2,
    preparingTime: 5000,
    endingTime: 2000,
    canvas: {
        stage: {
            width: 1000,
            height: 600
        },
        airport: {
            width: 1200,
            height: 500
        },
        airplane: {
            width: 300,
            height: 120
        },
        explosion: {
            width: 500,
            height: 500
        }
    }
};