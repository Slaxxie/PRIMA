namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export class Mothership extends QuadNode {
        static instance: Mothership;
        /* static newTxt: ƒ.TextureImage = new ƒ.TextureImage();
        static newCoat: ƒ.CoatTextured = new ƒ.CoatTextured();
        static material: ƒ.Material = new ƒ.Material("Mothership_Material", ƒ.ShaderTexture, Mothership.newCoat); */

        private constructor() {
            let pos: ƒ.Vector2 = new ƒ.Vector2(0, 19);
            let scale: ƒ.Vector2 = new ƒ.Vector2(2, 1.2);
            super("Mothership", pos, scale);

            let texture: ƒ.TextureImage = new ƒ.TextureImage("mothership2.png");
            let material: ƒ.Material = new ƒ.Material("MaterialName", ƒ.ShaderTexture, new ƒ.CoatTextured(ƒ.Color.CSS("White"), texture));
            this.addComponent(new ƒ.ComponentMaterial(material));
            /* let oldComCoat: ƒ.ComponentMaterial = this.getComponent(ƒ.ComponentMaterial);

            Mothership.newTxt.load("mothership2.png");

            Mothership.newCoat.texture = Mothership.newTxt;
            oldComCoat.material = Mothership.material; */
        }
        static getInstance(): Mothership {
            if (this.instance == null) this.instance = new Mothership();
            return this.instance;
        }
    }
}