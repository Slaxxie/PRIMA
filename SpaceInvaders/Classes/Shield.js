"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    SpaceInvaders.shieldX = -9;
    SpaceInvaders.shieldY = 4;
    SpaceInvaders.shieldNr = 1;
    class Shield extends ƒ.Node {
        constructor(_x, _y, _lives) {
            super("Shield " + SpaceInvaders.shieldNr);
            this.addComponent(new ƒ.ComponentMaterial());
            this.addComponent(new ƒ.ComponentTransform());
            let newTxt = new ƒ.TextureImage();
            let newCoat = new ƒ.CoatTextured();
            let newMtr = new ƒ.Material("Shield_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat = this.getComponent(ƒ.ComponentMaterial);
            this.mtxLocal.translateX(SpaceInvaders.shieldX);
            this.mtxLocal.translateY(SpaceInvaders.shieldY);
            let shieldMesh = new ƒ.MeshQuad("Shield_Mesh");
            this.addComponent(new ƒ.ComponentMesh(shieldMesh));
            switch (_lives) {
                default: {
                    newTxt.load("shield.png");
                    newCoat.texture = newTxt;
                    oldComCoat.material = newMtr;
                    break;
                }
                case 3: {
                    newTxt.load("shield2.png");
                    newCoat.texture = newTxt;
                    oldComCoat.material = newMtr;
                    break;
                }
                case 2: {
                    newTxt.load("shield3.png");
                    newCoat.texture = newTxt;
                    oldComCoat.material = newMtr;
                    break;
                }
                case 1: {
                    newTxt.load("shield4.png");
                    newCoat.texture = newTxt;
                    oldComCoat.material = newMtr;
                    break;
                }
                case 0: {
                    newTxt.load("destroyed.png");
                    newCoat.texture = newTxt;
                    oldComCoat.material = newMtr;
                    break;
                }
            }
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(3);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(2);
        }
    }
    SpaceInvaders.Shield = Shield;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Shield.js.map