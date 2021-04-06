namespace SpaceInvaders {
  import ƒ = FudgeCore;
  export let noHit: Boolean = true;
  export class Projectile extends ƒ.Node {
    constructor(_x: number, _y: number) {
      super("Projectile");
      
      this.addComponent(new ƒ.ComponentTransform());
      this.mtxLocal.translateX(_x);
      this.mtxLocal.translateY(_y);

      let projectileMesh: ƒ.Mesh = new ƒ.MeshQuad("Projectile_Mesh");

      let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(projectileMesh);
      this.addComponent(cmpMesh);
      let material: ƒ.Material = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 0, 0, 1)));
      let cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(material);
      this.addComponent(cmpMaterial);

      this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(1 / 10);
    }
  }
}