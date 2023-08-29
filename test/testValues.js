const showKeysValueFunc=require('../values');

const testObject = { 
    name: 'Bruce Wayne', 
    age: 36, 
    location: 'Gotham',
    findInfo:()=>{
    console.log('hi');
    } 
}; 

let values=showKeysValueFunc(testObject);

console.log("Values : ",values);