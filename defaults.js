// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults

function defaults(obj, defaultProps) {

    for(let key in defaultProps){
         
        if(obj[key]===undefined){
            obj[key]=defaultProps[key];
        }
    }

    return obj;
}

module.exports=defaults;