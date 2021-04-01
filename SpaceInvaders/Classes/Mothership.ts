namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export let shipX: number = 0;
    export let shipY: number = 19;
    export class Mothership extends ƒ.Node {
        constructor(_x: number, _y: number) {
            super("Mothership");
            this.addComponent(new ƒ.ComponentMaterial()); 

            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(shipX);
            this.mtxLocal.translateY(shipY);
            
            let mothershipMesh: ƒ.Mesh = new ƒ.MeshQuad("Mothership_Mesh");
            
            let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(mothershipMesh);
            this.addComponent(cmpMesh);
           
            let newTxt: ƒ.TextureImage = new ƒ.TextureImage();
            let newCoat: ƒ.CoatTextured = new ƒ.CoatTextured();
            let newMtr: ƒ.Material = new ƒ.Material("Mothership_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat: ƒ.ComponentMaterial = this.getComponent(ƒ.ComponentMaterial);

            newTxt.load("mothership.png");

            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
            
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(2);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(16 / 11);
        } 
    }      
}