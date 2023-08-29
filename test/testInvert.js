const invertObjectFun=require('../invert');


const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 

const invertObject=invertObjectFun(testObject);

console.log('Original Object: ',testObject);
console.log('Invert Object: ',invertObject);