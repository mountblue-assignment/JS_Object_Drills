 /*
  Like map for arrays, but for objects. 
 Transform the value of each property in turn by passing it to the callback function.
  http://underscorejs.org/#mapObject

*/

const keys=require('./keys');



function mapObject(obj, cb) {
    
    let newObj={};
     
    /*if we want to pass index in cb so for this we generate keysArr and uses index
    of each key bcz object does'nt provide any index 
    */

    let keysArr=keys(obj);
    
    for(let index=0;index<keysArr.length;index++){

        let currentValue=(obj[keysArr[index]]);
        
       let transformedValue=cb(currentValue,index);
        
       //here we are storing transformedValue in same key of newObj 
       newObj[keysArr[index]]=transformedValue;
    }

    return newObj;
}


module.exports=mapObject;