namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export class Invader extends QuadNode {
        private static count: number = 0;
       
        constructor(_pos: ƒ.Vector2) {
            let scale: ƒ.Vector2 = new ƒ.Vector2(1, 1);
            super("Invader" + (++Invader.count), _pos, scale);
            let texture: ƒ.TextureImage = new ƒ.TextureImage("invader2.png");
            let material: ƒ.Material = new ƒ.Material("MaterialName", ƒ.ShaderTexture, new ƒ.CoatTextured(ƒ.Color.CSS("White"), texture));
            this.addComponent(new ƒ.ComponentMaterial(material));
        }
        public move(_movement: number): void {
            let timeSinceLastFrame: number = ƒ.Loop.timeFrameReal / 1000;
            this.mtxLocal.translateX(timeSinceLastFrame * _movement);
            this.setRectPosition();
          }
    }
}