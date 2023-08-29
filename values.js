// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values


function  values(obj) {

 if(typeof obj!=='object'){
    return null;
 }
   
   let valuesArr=[];

/*
we will iterate over keys and will verify whether these keys are Object's own properties or not 
then using keys we will get values  and then we will check value's type for ignoring functions

*/
  for(let key in obj){

      let value=obj[key];
       if(obj.hasOwnProperty(key)  && typeof(value)!=='function'){
      valuesArr.push(value);
      }
 }

  return valuesArr;
}

module.exports=values;