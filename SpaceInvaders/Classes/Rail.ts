namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export let railX: number = 0;
    export let railY: number = -0.4;
    export let railZ: number = -1;

    export class Rail extends ƒ.Node {
        constructor(_x: number, _y: number, _z: number) {
            super("Background");
            this.addComponent(new ƒ.ComponentMaterial()); 

            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(railX);
            this.mtxLocal.translateY(railY);
            this.mtxLocal.translateZ(railZ);
            
            let backgroundMesh: ƒ.Mesh = new ƒ.MeshQuad("Rail_Mesh");
            
            let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(backgroundMesh);
            this.addComponent(cmpMesh);
           
            let newTxt: ƒ.TextureImage = new ƒ.TextureImage();
            let newCoat: ƒ.CoatTextured = new ƒ.CoatTextured();
            let newMtr: ƒ.Material = new ƒ.Material("Background_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat: ƒ.ComponentMaterial = this.getComponent(ƒ.ComponentMaterial);


            newTxt.load("rail.png");

            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
            
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(31);
           /*  this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(30); */
            
        } 
    }      
}