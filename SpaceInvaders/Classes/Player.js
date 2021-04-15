"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    class Player extends SpaceInvaders.QuadNode {
        constructor() {
            let pos = new ƒ.Vector2(0, 0);
            let scale = new ƒ.Vector2(1, 1);
            super("Player", pos, scale);
            let texture = new ƒ.TextureImage("player2.png");
            let material = new ƒ.Material("MaterialName", ƒ.ShaderTexture, new ƒ.CoatTextured(ƒ.Color.CSS("White"), texture));
            this.addComponent(new ƒ.ComponentMaterial(material));
        }
        static getInstance() {
            if (this.instance == null)
                this.instance = new Player();
            return this.instance;
        }
        moveRight() {
            this.setRectPosition();
            Player.getInstance().mtxLocal.translateX((SpaceInvaders.movementspeed * ƒ.Loop.timeFrameReal) / 1000);
        }
        moveLeft() {
            this.setRectPosition();
            Player.getInstance().mtxLocal.translateX((-SpaceInvaders.movementspeed * ƒ.Loop.timeFrameReal) / 1000);
        }
    }
    SpaceInvaders.Player = Player;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Player.js.map