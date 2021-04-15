"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    class Projectile extends SpaceInvaders.QuadNode {
        constructor(_pos) {
            let scale = new ƒ.Vector2(1 / 10, 1);
            super("Projectile", _pos, scale);
            let material = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 0, 0, 1)));
            this.addComponent(new ƒ.ComponentMaterial(material));
        }
        move() {
            this.mtxLocal.translateY(+0.7);
            this.setRectPosition();
        }
    }
    SpaceInvaders.Projectile = Projectile;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Projectile.js.map