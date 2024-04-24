import type {CrashConfig} from '@components/games/crash/type';

export const crashConfig:CrashConfig = {
    defaultUserBetValue: 1, // Ставка юзера (int)
    coefficientUpdateInterval: 10, // Интервал обновления коэффициента (ms)
    animationTimeStampInterval: 500, // Интервал между итерациями анимации (ms)
    explosionCoefficient: 2, // КОЭФФИЦИЕНТ НА КОТОРОМ ЗАКАНЧИВАЕТСЯ РАУНД (float | integer)
    preparingTime: 5, // Время подготовки к новому раунду (s)
    endingTime: 2000, // Время проигрыша анимации взрыва (ms)
    canvas: {
        stage: {
            width: 1000,
            height: 600
        },
        airport: {
            width: 1200,
            height: 500
        },
        city: {
            width: 1600,
            height: 1000
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