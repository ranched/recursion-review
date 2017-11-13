// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  
  //get first element, get classes, check if className is in classes
  //find chilren
  //iterate through children calling getElementsByClassName

  var node = node || document.body;
  var elements = [];
  
  if(node.classList.contains(className)){
    elements.push(node);
    console.log(node.childNodes);
    
  }
  
  var children = node.children;

  if(children.length > 0){
    for(i = 0; i < children.length; i++){
      elements.concat(getElementsByClassName(className, children[i]));
    }
  }

  return elements;
   

};
