// Returns a copy of the object where the keys have become the values and the values the keys.
// Assume that all of the object's values will be unique and string serializable.


function invert(obj) {

 //we will create new obj and will swap the keys and values with each other 

    let invertObj={};

   for(let key in obj){

      let currentValue=obj[key];
      invertObj[currentValue]=key;

   }

   return invertObj;
}

module.exports=invert;
