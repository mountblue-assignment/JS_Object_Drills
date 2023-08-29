const mapObjectFunc=require('../mapObject');

let numObj={
    num1:5,
    num2:10,
    num3:15
}

function multiplyBy2Fun(value,index){
    return value*2;
}

let result=mapObjectFunc(numObj,multiplyBy2Fun);

console.log('Original Object: ',numObj);
console.log('After Multiplying by 2 ',result);