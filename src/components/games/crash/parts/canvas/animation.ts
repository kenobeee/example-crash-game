type Coords = {x:number, y:number};
export type Size = {width?:number, height?:number};
type Rotate = {rotation?:number, angle?:number};
export type AnimationIteration = Coords & Size & Rotate;

interface IAnimation {
    airplane:AnimationIteration[]
    cityBg:AnimationIteration[]
    airport:AnimationIteration[]
}

export const animation:IAnimation = {
    airplane: [
        {x: -400, y: 575, angle: -5},
        {x: -400, y: 575, angle: -5},
        {x: -300, y: 550, angle: -10},
        {x: -200, y: 525, angle: -15},
        {x: -100, y: 500, angle: -20},
        {x: 0, y: 475, angle: -25},
        {x: 100, y: 450, angle: -30},
        {x: 200, y: 425, angle: -35},
        {x: 300, y: 400, angle: -40},
        {x: 400, y: 375, angle: -45},
        {x: 500, y: 350, angle: -50},
        {x: 600, y: 325, angle: -55},
        {x: 700, y: 300, angle: -60},

    ],
    cityBg: [
        {x: -10, y: -400},
        {x: -10, y: -400},
        {x: -20, y: -390},
        {x: -30, y: -380},
        {x: -40, y: -370},
        {x: -50, y: -360},
        {x: -60, y: -350},
        {x: -65, y: -340},
        {x: -70, y: -330},
        {x: -75, y: -320},
        {x: -80, y: -310},
        {x: -90, y: -300},
        {x: -95, y: -290},
        {x: -100, y: -280},
        {x: -105, y: -270},
        {x: -110, y: -260},
        {x: -115, y: -250},
        {x: -120, y: -240},
        {x: -125, y: -230},
        {x: -130, y: -220},
        {x: -135, y: -210},
        {x: -140, y: -200},
        {x: -145, y: -190},
        {x: -150, y: -180},
        {x: -155, y: -170},
        {x: -160, y: -160},
    ],
    airport: [
        {x: 0, y: 200},
        {x: 0, y: 200},
        {x: -100, y: 250},
        {x: -200, y: 300},
        {x: -300, y: 350},
        {x: -400, y: 400},
        {x: -500, y: 450},
        {x: -600, y: 500},
        {x: -700, y: 550},
        {x: -800, y: 600},
        {x: -900, y: 650},
        {x: -1000, y: 700},
    ]
};