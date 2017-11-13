// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, nodeElement) {
  // your code here
  console.log(new Date);
  
//get first element, get classes, check if className is in classes
  //find chilren
  //iterate through children calling getElementsByClassName
/*
  var body =  document.body;
  var elements = [];

  if(body.classList.contains(className)){
    elements.push(body);
  }

  findChildren(body);
  function findChildren(parent){
  
    var children = parent.children;
    if(children.length > 0){
      for(i = 0; i < children.length; i++){
        if(children[i].classList !== undefined && children[i].classList.contains(className)){
          elements.push(children[i]);
        }
        findChildren(children[i]);
      }
    }
    }
  
  return elements;

*/
  var elements = [];
  if(document.body.classList.contains(className)){
    elements.push(document.body);
  }   
  getChildrenClasses(document.body);
  function getChildrenClasses(parent){
    var children = parent.childNodes;
    for(var i = 0; i < children.length; i++){
      if(children[i].classList !== undefined && children[i].classList.contains(className)){
        elements.push(children[i]);
      } 
      getChildrenClasses(children[i]); 
    }
  }
  return elements;
};

