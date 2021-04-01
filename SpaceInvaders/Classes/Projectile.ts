namespace SpaceInvaders {
    import ƒ = FudgeCore;
    export let noHit: Boolean = true;
    export class Projectile extends ƒ.Node {
      static instance: Projectile;
  
      private constructor() {
        super("Projectile");
        this.addComponent(new ƒ.ComponentMaterial()); 

        this.addComponent(new ƒ.ComponentTransform());
            
        let projectileMesh: ƒ.Mesh = new ƒ.MeshQuad("Projectile_Mesh");
            
        let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(projectileMesh);
        this.addComponent(cmpMesh);
        let material: ƒ.Material = new ƒ.Material("Material", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(1, 0, 0, 1)));
        let cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(material);
        this.addComponent(cmpMaterial);
        
        this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleX(1 / 5);
        this.getComponent(ƒ.ComponentMesh).mtxPivot.scaleY(1);
        
        while (noHit) {
            this.mtxLocal.translateY(+1);
        }
      }
  
      static getInstance(_x: number, _y: number): Projectile {
        if (this.instance == null) this.instance = new Projectile();
        return this.instance;
      }
    }
  }