const showKeysFunc=require('../keys');

const testObject = { 
    name: 'Bruce Wayne', 
    age: 36,
    location: 'Gotham' 
};

let keysArr=showKeysFunc(testObject);

console.log("Keys : ",keysArr);