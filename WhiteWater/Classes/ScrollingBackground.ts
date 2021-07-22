namespace WhiteWater {
    import ƒ = FudgeCore;


    export class ScrollingBackground extends ƒ.Node {
        constructor(_y: number) {
            super("Background");

            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(0);
            this.mtxLocal.translateY(_y);
            this.mtxLocal.translateZ(-0.1);
            let backgroundMesh: ƒ.Mesh = new ƒ.MeshSprite("Background_Mesh");
            let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(backgroundMesh);
            this.addComponent(cmpMesh);
            let backGroundTex: ƒ.TextureImage;


            let backGroundState: number;
            
            do {
                backGroundState = Math.ceil(Math.random() * 9);
            }
            while (backGroundStateTemp == backGroundState);
            
            switch (backGroundState) {
                case 1: {
                    backGroundTex = new ƒ.TextureImage("spaceback1.png");
                    break;
                }
                case 2: {
                    backGroundTex = new ƒ.TextureImage("spaceback1.png");
                    break;
                }
                case 3: {
                    backGroundTex = new ƒ.TextureImage("spaceback2.png");
                    break;
                }
                case 4: {
                    backGroundTex = new ƒ.TextureImage("spaceback2.png");
                    break;
                }
                case 5: {
                    backGroundTex = new ƒ.TextureImage("spaceback3.png");
                    break;
                }
                case 6: {
                    backGroundTex = new ƒ.TextureImage("spaceback3.png");
                    break;
                }
                case 7: {
                    backGroundTex = new ƒ.TextureImage("spaceback4.png");
                    break;
                }
                case 8: {
                    backGroundTex = new ƒ.TextureImage("spaceback5.png");
                    break;
                }
                case 9: {
                    backGroundTex = new ƒ.TextureImage("spaceback6.png");
                    break;
                }
                default: {
                    backGroundTex = new ƒ.TextureImage("spaceback1.png");
                    break;
                }
            }

            let material: ƒ.Material = new ƒ.Material("MaterialName", ƒ.ShaderTexture, new ƒ.CoatTextured(ƒ.Color.CSS("White"), backGroundTex));
            this.addComponent(new ƒ.ComponentMaterial(material));

            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(31);
            this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(22);

            backGroundStateTemp = backGroundState;
        }
        move(_movement: number): void {
            let timeSinceLastFrame: number = ƒ.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateY(timeSinceLastFrame * _movement);
        }

    }
}