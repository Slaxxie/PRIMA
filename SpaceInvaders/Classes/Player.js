"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.playerX = 0;
    SpaceInvaders.playerY = 0;
    class Player extends ƒ.Node {
        constructor(_x, _y) {
            super("Player");
            this.addComponent(new ƒ.ComponentMaterial());
            this.addComponent(new ƒ.ComponentTransform());
            let playerMesh = new ƒ.MeshQuad("Player_Mesh");
            let cmpMesh = new ƒ.ComponentMesh(playerMesh);
            this.addComponent(cmpMesh);
            let newTxt = new ƒ.TextureImage();
            let newCoat = new ƒ.CoatTextured();
            let newMtr = new ƒ.Material("Player_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat = this.getComponent(ƒ.ComponentMaterial);
            newTxt.load("player2.png");
            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
        }
    }
    SpaceInvaders.Player = Player;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Player.js.map