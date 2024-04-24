type Coords = {x:number, y:number};
export type Size = {width?:number, height?:number};
type Rotate = {rotation?:number};
export type AnimationIteration = Coords & Size & Rotate;

interface IAnimation {
    airplane:AnimationIteration[]
    sky:AnimationIteration[]
    airport:AnimationIteration[]
}

export const animation:IAnimation = {
    airplane: [
        // on the ground
        {x: 0, y: 500, rotation: 0},
        {x: 0, y: 500, rotation: 0},
        {x: 0, y: 500, rotation: -0.02},
        {x: 0, y: 500, rotation: -0.04},
        {x: 0, y: 500, rotation: -0.06},
        // up
        {x: 50, y: 480, rotation: -0.08},
        {x: 100, y: 460, rotation: -0.1},
        {x: 150, y: 440, rotation: -0.1},
        {x: 200, y: 420, rotation: -0.1},
        {x: 250, y: 400, rotation: -0.1},
        {x: 300, y: 380, rotation: -0.1},
        {x: 350, y: 360, rotation: -0.1},
        {x: 400, y: 340, rotation: -0.1},
        {x: 450, y: 320, rotation: -0.1},
        // stabling
        {x: 500, y: 300, rotation: -0.11},

    ],
    sky: [
        // on the ground
        {x: -10, y: -800},
        {x: -10, y: -800},
        {x: -15, y: -800},
        {x: -20, y: -800},
        {x: -25, y: -800},
        // up
        {x: -30, y: -790},
        {x: -35, y: -780},
        {x: -40, y: -770},
        {x: -45, y: -760},
        {x: -50, y: -750},
        {x: -55, y: -740},
        {x: -60, y: -730},
        {x: -65, y: -720},
        {x: -70, y: -710},
        // stabling
        {x: -75, y: -700},
    ],
    airport: [
        // on the ground
        {x: 0, y: 250},
        {x: 0, y: 250},
        {x: -250, y: 250},
        {x: -500, y: 250},
        {x: -750, y: 250},
        // up
        {x: -1000, y: 300},
        {x: -1250, y: 350},
        {x: -1500, y: 400},
        {x: -1750, y: 450},
        {x: -2000, y: 500},
        {x: -2250, y: 550},
        {x: -2500, y: 600},
        {x: -2750, y: 650},
        {x: -3000, y: 700},
        // stabling
        {x: -3250, y: 750},
    ]
};