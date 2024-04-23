interface CrashConfig {
    coefficientUpdateInterval:number, // ms
    animationTimeStampInterval:number // ms
    explosionCoefficient:number // float | integer
    preparingTime:number // ms
    endingTime:number // ms
}

export const crashConfig:CrashConfig = {
    coefficientUpdateInterval: 10,
    animationTimeStampInterval: 500,
    explosionCoefficient: 2,
    preparingTime: 5000,
    endingTime: 2000
};