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
  if(Object.prototype.toString.call(obj) === '[object Object]'){
    var 
      
  }
  return '' + obj;

  
};
