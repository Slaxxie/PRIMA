namespace SpaceInvaders {
    import ƒ = FudgeCore;

    export let gameNode: ƒ.Node = new ƒ.Node("Game");
    export let viewportNode: ƒ.Node = new ƒ.Node("Viewport");
    export let viewport: ƒ.Viewport = new ƒ.Viewport();
    
    export let bulletVisible: boolean = false;
    export let moveDirection: boolean = true;
    export let collisionRight: boolean = false;
    export let collisionLeft: boolean = false;
    
    export let laserNode: ƒ.Node = new ƒ.Node("LaserNode");
    export let projectiles: ƒ.Node = new ƒ.Node("Projectiles");
    export let invaders: ƒ.Node = new ƒ.Node("Invaders");
    /* let shields: ƒ.Node = new ƒ.Node("Shields"); */
    export let mothership: ƒ.Node = new ƒ.Node("Mothership");
    export let backGroundNode: ƒ.Node = new ƒ.Node("Motherssdsfsdfhip");
    export let player: Player;
    export let railNode: ƒ.Node = new Rail(railX, railY, railZ);
    
    export let movementspeed: number = 15;
    export let leftBorder: number = -13.5;
    export let rightBorder: number = 13.5;
    /* let bottomBorder: number = 1; */
    export let columnCount: number = 11;
    export let rowCount: number = 5;
    export let velocity: number;
    /* let backGroundNode: ƒ.Node = new Background(backX, backY, backZ); */
}