import { vi } from "element-plus/es/locale";

interface Visitor {
    visitorCPU(cpu:CPU):void;
    visitorHardDisk(hardDisk:HardDisk):void;
}

export class UpdateVisitor implements Visitor {
    visitorCPU(cpu: CPU): void {
        cpu.commond += ", 1+1=2";
    }

    visitorHardDisk(hardDisk: HardDisk): void {
        hardDisk.commond += ', 存：1+1=2'
    }
}


 export class EggRobot {
    private cpu:CPU;
    private hardDisk:HardDisk;

    constructor(){
        this.cpu = new CPU("1+1=1");
        this.hardDisk = new HardDisk("记：1+1=1");
    }

    public calc():void {
        this.cpu.run();
        this.hardDisk.run();
    }

    public shengji(visitor:Visitor){
        this.cpu.accept(visitor);
        this.hardDisk.accept(visitor);
    }

 }


 abstract class Hardware {
    commond:string;
    constructor(commond:string){
        this.commond = commond;
    }

    public run():void{
        console.log(this.commond)
    }

    public abstract accept(visitor:Visitor):void;

 }

 class CPU extends Hardware {
    public accept(visitor: Visitor): void {
        visitor.visitorCPU(this);
    }
 }


 class HardDisk extends Hardware {
    public accept(visitor: Visitor): void {
        visitor.visitorHardDisk(this);
    }
 }