export const arr:(string|number|boolean)[] = [1,'2',true]


var sites:string[] = new Array("Google","Runoob","Taobao","Facebook");

function disp(arr_sites:string[]){
    for(var i= 0;i<arr_sites.length;i++){
        console.log(arr_sites[i]);
    }
}

disp(sites)