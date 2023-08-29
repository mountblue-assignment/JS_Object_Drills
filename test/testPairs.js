const generatePairs=require('../pairs');

const testObject = { 
    name: 'Bruce Wayne',
    age: 36,
    location: 'Gotham' 
};

let pairs=generatePairs(testObject);

console.log('Pairs : ',pairs);