interface CrashConfig {
    coefficientUpdateInterval:number, // ms
    animationTimeStampInterval:number // ms
    explosionCoefficient:number
}

export const crashConfig:CrashConfig = {
    coefficientUpdateInterval: 10,
    animationTimeStampInterval: 500,
    explosionCoefficient: 2
};