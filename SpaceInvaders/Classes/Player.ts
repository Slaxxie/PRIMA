namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export let playerX: number = 0;
    export let playerY: number = 0;
    export class Player extends ƒ.Node {
        constructor(_x: number, _y: number) {
            super("Player");
            this.addComponent(new ƒ.ComponentMaterial()); 

            this.addComponent(new ƒ.ComponentTransform());
            
            let playerMesh: ƒ.Mesh = new ƒ.MeshQuad("Player_Mesh");
            
            let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(playerMesh);
            this.addComponent(cmpMesh);
           
            let newTxt: ƒ.TextureImage = new ƒ.TextureImage();
            let newCoat: ƒ.CoatTextured = new ƒ.CoatTextured();
            let newMtr: ƒ.Material = new ƒ.Material("Player_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat: ƒ.ComponentMaterial = this.getComponent(ƒ.ComponentMaterial);


            newTxt.load("player.png");

            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
            
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(1);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(8 / 11);
        } 
    }      
}