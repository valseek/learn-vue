
const uniqueKey = {};
let commonUniqueId = 0;

export const getUniqueId=function(prefix){
    if(prefix === '' || prefix === false || prefix === null ){
        return ++commonUniqueId ;
    }
    if(!uniqueKey.hasOwnProperty(prefix)){
        uniqueKey[prefix] = 0;
    }

    return prefix+ (++uniqueKey[prefix]);

}


