"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    class Invader extends SpaceInvaders.QuadNode {
        constructor(_pos) {
            let scale = new ƒ.Vector2(1, 1);
            super("Invader" + (++Invader.count), _pos, scale);
            let texture = new ƒ.TextureImage("invader2.png");
            let material = new ƒ.Material("MaterialName", ƒ.ShaderTexture, new ƒ.CoatTextured(ƒ.Color.CSS("White"), texture));
            this.addComponent(new ƒ.ComponentMaterial(material));
        }
        move(_movement) {
            let timeSinceLastFrame = ƒ.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateX(timeSinceLastFrame * _movement);
            this.setRectPosition();
        }
    }
    Invader.count = 0;
    SpaceInvaders.Invader = Invader;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Invader.js.map