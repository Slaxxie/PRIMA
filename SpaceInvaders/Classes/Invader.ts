namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export let rowCount: number = 0;
    export let spawnX: number = -10;
    export let spawnY: number = 17;
    export class Invader extends ƒ.Node {
        constructor() {
            super("Invader" + spawnX + "/" + spawnY);
            this.addComponent(new ƒ.ComponentMaterial()); 

            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(spawnX);
            this.mtxLocal.translateY(spawnY);
            
            let invaderMesh: ƒ.Mesh = new ƒ.MeshQuad("Invader_Mesh");
            
            let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(invaderMesh);
            this.addComponent(cmpMesh);
           
            let newTxt: ƒ.TextureImage = new ƒ.TextureImage();
            let newCoat: ƒ.CoatTextured = new ƒ.CoatTextured();
            let newMtr: ƒ.Material = new ƒ.Material("Invader_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat: ƒ.ComponentMaterial = this.getComponent(ƒ.ComponentMaterial);

            newTxt.load("invader2.png");

            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
        } 
    }
}