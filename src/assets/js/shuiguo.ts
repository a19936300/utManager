import { readonly } from "vue";

interface IShuiGuo {
    mingCheng:string,
    yanSe:string,
    kouWei:()=> string
}

const greeting:string = 'hello,world!';
const greetboolean = true;
let lee:number = 0;
const s0:symbol = Symbol();
const s1:symbol = Symbol.for('foo');
const s2:symbol = Symbol.hasInstance;
export class pingGuo implements IShuiGuo {
    mingCheng:string = "苹果";
    yanSe:string = "红色";
    kouWei():string {
        console.log(s2);

        return greeting;
    }
}


class RangeValidationBase {
    constructor(private start:number,private end:number){}
    protected RangeCheck(value:number):boolean{
        return value >= this.start && value <= this.end;
    }
    protected GetNumber(value:string):number{
        return new Number(value).valueOf();
    }
}