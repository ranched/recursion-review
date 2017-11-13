// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, nodeElement) {
  
//get first element, get classes, check if className is in classes
  //find chilren
  //iterate through children calling getElementsByClassName

  var body = document.body;
  var elements = [];

  if (body.classList.contains(className)) {
    elements.push(body);
  }

  
  var findChildren = function(parent) {
  
    var children = parent.children;
  
    for (var i = 0; i < children.length; i++) {
      if (children[i].classList !== undefined && children[i].classList.contains(className)) {
        elements.push(children[i]);
      }
      findChildren(children[i]);
    }
    
  };
  findChildren(body);
  return elements;

};

