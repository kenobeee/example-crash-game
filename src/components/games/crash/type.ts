// animated

export type Coords = {x:number, y:number};
export type Rotate = {angle?:number};
export type Size = {width?:number, height?:number};
export type AnimationIteration = Coords & Size & Rotate;

export type AnimatedFields = {from:AnimationIteration, to:AnimationIteration};

// cfg

export interface IAnimationPath {
    airplane:AnimationIteration[]
    cityBg:AnimationIteration[]
    airport:AnimationIteration[]
}

export interface CrashConfig {
    defaultUserBetValue:number,
    coefficientUpdateInterval:number
    animationTimeStampInterval:number
    explosionCoefficient:number
    preparingTime:number
    endingTime:number
    canvas:{
        stage:Required<Size>
        airport:Required<Size>
        city:Required<Size>
        airplane:Required<Size>
        explosion:Required<Size>
    }
}

// store

export interface ICrashState {
    coefficient:number
    preparingTimer:number
    roundStartDate:number
    userBet:number | null
    userWon:number | null
    isRoundRunning:boolean
    isRoundPreparing:boolean
    isRoundEnding:boolean
}

export interface ICrashActions {
    setCoefficient:(value:ICrashState['coefficient']) => void
    decrementPreparingTimer:() => void
    startRound:() => void
    startPrepare:() => void
    endRound:() => void
    bet:() => void
    won:() => void
}

export type CrashStore = ICrashState & ICrashActions;