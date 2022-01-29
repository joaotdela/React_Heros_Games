export const tile_size = 48;
export const game_size = 20 * tile_size; //960
export const demon_size = 2 * tile_size;
export const head_ofset = 12;
export const height_objects = 80;


export enum Edirection {
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown",
}

export enum KeyEdirection {
    KeyLeft = 65,
    KeyRight = 68,
    KeyUp = 87,
    KeyDown = 83,
}

export enum Ewalker {
    HERO = 'hero',
    ENEMY = 'enemy'
}