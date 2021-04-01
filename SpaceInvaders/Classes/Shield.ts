namespace SpaceInvaders {
    import ƒ = FudgeCore;

    export let shieldX: number = -9;
    export let shieldY: number = 4;
    export let shieldNr: number = 1;

    export class Shield extends ƒ.Node {
        constructor(_x: number, _y: number, _lives: number) {
            super("Shield " + shieldNr);

            this.addComponent(new ƒ.ComponentMaterial());
            this.addComponent(new ƒ.ComponentTransform());
            let newTxt: ƒ.TextureImage = new ƒ.TextureImage();
            let newCoat: ƒ.CoatTextured = new ƒ.CoatTextured();
            let newMtr: ƒ.Material = new ƒ.Material("Shield_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat: ƒ.ComponentMaterial = this.getComponent(ƒ.ComponentMaterial);

            this.mtxLocal.translateX(shieldX);
            this.mtxLocal.translateY(shieldY);

            let shieldMesh: ƒ.Mesh = new ƒ.MeshQuad("Shield_Mesh");
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
}