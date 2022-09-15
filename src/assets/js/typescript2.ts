//1.3.1 联合类型使用

import { fa } from "element-plus/es/locale";

export 
class RangeValidationBase {
    constructor(private start:number,private end:number){}
    protected RangeCheck(value:number):boolean{
        return value >= this.start && value <= this.end;
    }
    protected GetNumber(value:string):number{
        return new Number(value).valueOf();
    }
}

class RangeValidationBase2 {
    private start:number = 0;
    private end:number = 0;
    constructor(start:number,end:number){
        this.start = start;
        this.end = end;
    }
}

class SeparrateTypeRangeValidation extends RangeValidationBase {
    IsInRangeString(value:string):boolean{
        return this.RangeCheck(this.GetNumber(value));
    }

    IsInRangeNumber(value:number){
        return this.RangeCheck(value);
    }

}

class AnyRangeValidation extends RangeValidationBase {
    IsInRange(value:any):boolean{
        if(typeof value === "number"){
            return this.RangeCheck(value);
        }else if (typeof value === "string"){
            return this.RangeCheck(this.GetNumber(value))
        }
        return false;
    }
}

class UnionRanageValidation extends RangeValidationBase {
    IsInRange(value:number|string):boolean{
        if(typeof value === "number"){
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value))
    }
}