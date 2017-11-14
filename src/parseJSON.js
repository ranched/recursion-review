// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  var count = 0;
  
  var char = json.charAt(count);
  var nextChar = function() {
    count++; 
    char = json.charAt(count);
  };
  var skipSpaces = function(){
    if(char === ' '){
      nextChar();
    }
  }

  var value = function() {
    if (char === '"') {
      nextChar();      
      return string();
    } else if (typeof char === 'number') {
      return number();
    } else if (char === '[') {
      nextChar();
      return array();
    } else if(char === '{'){
      nextChar();
      return object();
    }
    
  };

  var object = function() {
    var obj = {};
    if(char === '}'){
      return obj;
    }
    nextChar();
    var key = string();
    nextChar();
    skipSpaces();
    var val = value();
    obj[key] = val;
    while(char === ','){
      var key = string();
      nextChar();
      skipSpaces();
      var val = value();
      obj[key] = val;
    }
    nextChar();
    return obj;
  };

  var array = function() {
    var arr = [];
    if (char === ']') {
      return arr;
    }
    arr.push(value());
    while (char === ',') {
      skipSpaces();
      array.push(value);
      nextChar();
    }
    return arr;
  };

  var string = function() {
    var str = '';
    while (char !== '"') {
      str += char;
      nextChar();
    }
    nextChar();
    return str;
  };

  var number = function () {
    var str = '';
    while (typeof char === 'number') {
      str += char;
      nextChar();
    }
    return parseInt(str);
  };
  return value();
};
