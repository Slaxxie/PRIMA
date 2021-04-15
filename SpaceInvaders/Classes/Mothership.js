"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    class Mothership extends SpaceInvaders.QuadNode {
        /* static newTxt: ƒ.TextureImage = new ƒ.TextureImage();
        static newCoat: ƒ.CoatTextured = new ƒ.CoatTextured();
        static material: ƒ.Material = new ƒ.Material("Mothership_Material", ƒ.ShaderTexture, Mothership.newCoat); */
        constructor() {
            let pos = new ƒ.Vector2(0, 19);
            let scale = new ƒ.Vector2(2, 1.2);
            super("Mothership", pos, scale);
            let texture = new ƒ.TextureImage("mothership2.png");
            let material = new ƒ.Material("MaterialName", ƒ.ShaderTexture, new ƒ.CoatTextured(ƒ.Color.CSS("White"), texture));
            this.addComponent(new ƒ.ComponentMaterial(material));
            /* let oldComCoat: ƒ.ComponentMaterial = this.getComponent(ƒ.ComponentMaterial);

            Mothership.newTxt.load("mothership2.png");

            Mothership.newCoat.texture = Mothership.newTxt;
            oldComCoat.material = Mothership.material; */
        }
        static getInstance() {
            if (this.instance == null)
                this.instance = new Mothership();
            return this.instance;
        }
    }
    SpaceInvaders.Mothership = Mothership;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Mothership.js.map