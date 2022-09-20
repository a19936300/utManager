class pai{
    name:string;
    nextPai:string[] = [];
    size:string[] = [];
    isCanUser:boolean = false;

    constructor(name:string) {
        this.name = name;
    }

}


export enum 种类 {
    手套,
    马桶刷,
    剪刀,
    麦捆,
    火堆,
    玉米,
    胡萝卜,
    牛奶,
    树墩,
    饭团,
    线团,
    草丛
}