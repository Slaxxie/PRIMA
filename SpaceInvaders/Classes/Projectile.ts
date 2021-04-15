namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export class Projectile extends QuadNode {
        
        
        constructor(_pos: ƒ.Vector2) {
            let scale: ƒ.Vector2 = new ƒ.Vector2(1 / 10, 1);
            super("Projectile", _pos, scale);
            let material: ƒ.Material = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 0, 0, 1)));
            this.addComponent(new ƒ.ComponentMaterial(material));
        }
        public move(): void {
            this.mtxLocal.translateY(+0.7);
            this.setRectPosition();
          }
    }
}