// Convert an object into a list of [key, value] pairs.
// http://underscorejs.org/#pairs



function pairs(obj) {


  let pairsArr=[];

  for(let key in obj){

     let pair=Array(2); //creating pair array of size 2

    let currentValue=obj[key];
    pair[0]=key;
    pair[1]=currentValue;

    pairsArr.push(pair); //adding each pair in pairsArr

  }

  return pairsArr;
}

module.exports=pairs;