type Coords = {x:number, y:number};
type Size = {width?:number, height?:number, scale?:number};
type Rotate = {rotation?:number};
export type AnimationIteration = Coords & Size & Rotate;

interface IAnimation {
    airplane:AnimationIteration[]
    sky:AnimationIteration[]
    airport:AnimationIteration[]
}

export const animation:IAnimation = {
    airplane: [
        // on the ground x6
        {x: 10, y: 530, rotation: 0},
        {x: 10, y: 530, rotation: 0},
        {x: 110, y: 530, rotation: -0.01},
        {x: 160, y: 530, rotation: -0.03},
        {x: 210, y: 530, rotation: -0.06},
        {x: 260, y: 530, rotation: -0.1},
        // up x4
        {x: 310, y: 500, rotation: -0.15},
        {x: 360, y: 450, rotation: -0.2},
        {x: 410, y: 400, rotation: -0.25},
        {x: 460, y: 350, rotation: -0.3},
        // stabling
        {x: 510, y: 300, rotation: -0.3},
        {x: 560, y: 250, rotation: -0.3},
        {x: 610, y: 200, rotation: -0.3},
    ],
    sky: [
        // on the ground x6
        {x: -10, y: -800, width: 2000, height: 1400},
        {x: -10, y: -800, width: 2000, height: 1400},
        {x: -15, y: -800, width: 2000, height: 1400},
        {x: -20, y: -800, width: 2000, height: 1400},
        {x: -25, y: -800, width: 2000, height: 1400},
        {x: -30, y: -800, width: 2000, height: 1400},
        // up x4
        {x: -35, y: -790, width: 2000, height: 1400},
        {x: -40, y: -780, width: 2000, height: 1400},
        {x: -45, y: -770, width: 2000, height: 1400},
        {x: -50, y: -760, width: 2000, height: 1400},
        // // stabling
        {x: -55, y: -750, width: 2000, height: 1400},
        {x: -60, y: -740, width: 2000, height: 1400},
        {x: -65, y: -730, width: 2000, height: 1400},
        {x: -70, y: -720, width: 2000, height: 1400},
        {x: -75, y: -710, width: 2000, height: 1400},
        {x: -80, y: -700, width: 2000, height: 1400},
        {x: -85, y: -690, width: 2000, height: 1400},
    ],
    airport: [
        // on the ground x6
        {x: 0, y: 250, width: 1400, height: 500},
        {x: 0, y: 250, width: 1400, height: 500},
        {x: -100, y: 250, width: 1400, height: 500},
        {x: -200, y: 250, width: 1400, height: 500},
        {x: -300, y: 250, width: 1400, height: 500},
        {x: -400, y: 250, width: 1400, height: 500},
        // up x4
        {x: -500, y: 270, width: 1400, height: 500},
        {x: -600, y: 290, width: 1400, height: 500},
        {x: -700, y: 310, width: 1400, height: 500},
        {x: -800, y: 330, width: 1400, height: 500},
        // // stabling
        {x: -900, y: 350, width: 1400, height: 500},
        {x: -1000, y: 370, width: 1400, height: 500},
        {x: -1100, y: 390, width: 1400, height: 500},
        {x: -1200, y: 410, width: 1400, height: 500},
        {x: -1300, y: 430, width: 1400, height: 500},
        {x: -1400, y: 450, width: 1400, height: 500},
    ]
};