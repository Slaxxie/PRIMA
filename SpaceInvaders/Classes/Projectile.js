"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.noHit = true;
    class Projectile extends ƒ.Node {
        constructor() {
            super("Projectile");
            this.addComponent(new ƒ.ComponentMaterial());
            this.addComponent(new ƒ.ComponentTransform());
            let projectileMesh = new ƒ.MeshQuad("Projectile_Mesh");
            let cmpMesh = new ƒ.ComponentMesh(projectileMesh);
            this.addComponent(cmpMesh);
            let material = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 0, 0, 1)));
            let cmpMaterial = new ƒ.ComponentMaterial(material);
            this.addComponent(cmpMaterial);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(1 / 5);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(1);
            while (SpaceInvaders.noHit) {
                this.mtxLocal.translateY(+1);
            }
        }
        static getInstance(_x, _y) {
            if (this.instance == null)
                this.instance = new Projectile();
            return this.instance;
        }
    }
    SpaceInvaders.Projectile = Projectile;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Projectile.js.map