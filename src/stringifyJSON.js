// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';  
  }
  if (Array.isArray(obj)) {
    var itemString = obj.reduce(function(accum, item) {
      accum.push(stringifyJSON(item));
      return accum;
    }, [] );
    return '[' + itemString.join() + ']';
  }
  if(typeof obj === 'function'){
   return ;
  }
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    var keys = Object.keys(obj);
    var length = keys.length;
    var objStr = '{';
    for (var key in obj) {
      if(typeof obj[key] !== 'function' && obj[key] !== undefined){
        var value = stringifyJSON(obj[key]);
        objStr += stringifyJSON(key) + ':' + value;
        if(key !== keys[length - 1]){
          objStr += ',';
        }
      }
    }
    return objStr + '}';
  }
  return '' + obj;

  
};
