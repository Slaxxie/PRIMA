"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.gameNode = new ƒ.Node("Game");
    SpaceInvaders.viewportNode = new ƒ.Node("Viewport");
    SpaceInvaders.viewport = new ƒ.Viewport();
    SpaceInvaders.bulletVisible = false;
    SpaceInvaders.moveDirection = true;
    SpaceInvaders.collisionRight = false;
    SpaceInvaders.collisionLeft = false;
    SpaceInvaders.laserNode = new ƒ.Node("LaserNode");
    SpaceInvaders.projectiles = new ƒ.Node("Projectiles");
    SpaceInvaders.invaders = new ƒ.Node("Invaders");
    /* let shields: ƒ.Node = new ƒ.Node("Shields"); */
    SpaceInvaders.mothership = new ƒ.Node("Mothership");
    SpaceInvaders.railNode = new SpaceInvaders.Rail(SpaceInvaders.railX, SpaceInvaders.railY, SpaceInvaders.railZ);
    SpaceInvaders.movementspeed = 15;
    SpaceInvaders.leftBorder = -13.5;
    SpaceInvaders.rightBorder = 13.5;
    /* let bottomBorder: number = 1; */
    SpaceInvaders.columnCount = 11;
    SpaceInvaders.rowCount = 5;
    /* let backGroundNode: ƒ.Node = new Background(backX, backY, backZ); */
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Variables.js.map