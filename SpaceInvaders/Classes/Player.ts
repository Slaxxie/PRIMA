namespace SpaceInvaders {
    import ƒ = FudgeCore;

    export class Player extends QuadNode {
        static instance: Player;
        private constructor() {
            let pos: ƒ.Vector2 = new ƒ.Vector2(0, 0);
            let scale: ƒ.Vector2 = new ƒ.Vector2(1, 1);
            super("Player", pos, scale);
            let texture: ƒ.TextureImage = new ƒ.TextureImage("player2.png");
            let material: ƒ.Material = new ƒ.Material("MaterialName", ƒ.ShaderTexture, new ƒ.CoatTextured(ƒ.Color.CSS("White"), texture));
            this.addComponent(new ƒ.ComponentMaterial(material));
        }
        static getInstance(): Player {
            if (this.instance == null) this.instance = new Player();
            return this.instance;
        }
        public moveRight(): void {
            this.setRectPosition();
            Player.getInstance().mtxLocal.translateX((movementspeed * ƒ.Loop.timeFrameReal) / 1000);
        }
        public moveLeft(): void {
            this.setRectPosition();
            Player.getInstance().mtxLocal.translateX((- movementspeed * ƒ.Loop.timeFrameReal) / 1000);
        }
    }
}