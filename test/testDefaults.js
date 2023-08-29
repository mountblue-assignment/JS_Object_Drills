const addDefaults=require('../defaults');


const testObject = {
     name: 'Bruce Wayne',
      age: 36,
     location: 'Gotham'
 };

 const defaultProps={name:'Henry Milton',gender:'male'};

 console.log('Original Object: ',testObject);
 
const updatedObj=addDefaults(testObject,defaultProps);

console.log('After applying defaults properties: ',updatedObj);