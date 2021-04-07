namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export let backX: number = 0;
    export let backY: number = 10;
    export let backZ: number = -11;

    export class Background extends ƒ.Node {
        constructor(_x: number, _y: number, _z: number) {
            super("Background");
            this.addComponent(new ƒ.ComponentMaterial()); 

            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(backX);
            this.mtxLocal.translateY(backY);
            this.mtxLocal.translateZ(backZ);
            
            let backgroundMesh: ƒ.Mesh = new ƒ.MeshQuad("Background_Mesh");
            
            let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(backgroundMesh);
            this.addComponent(cmpMesh);
           
            let newTxt: ƒ.TextureImage = new ƒ.TextureImage();
            let newCoat: ƒ.CoatTextured = new ƒ.CoatTextured();
            let newMtr: ƒ.Material = new ƒ.Material("Background_Material", ƒ.ShaderTexture, newCoat);
            let oldComCoat: ƒ.ComponentMaterial = this.getComponent(ƒ.ComponentMaterial);


            newTxt.load("background.png");

            newCoat.texture = newTxt;
            oldComCoat.material = newMtr;
            
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(40);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(30);
            
        } 
    }      
}