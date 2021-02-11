function IsTouching(object1,object2){
    if(object1.x - fixedrect.x < fixedrect.width/2+object1.width/2
      && fixedrect.x - object1.x < fixedrect.width/2+object1.width/2
      && object1.y - fixedrect.y < fixedrect.width/2+object1.width/2
      && fixedrect.y - object1.y < fixedrect.width/2+object1.width/2){
  
      return true ;
    }
    else{
      return false ;
    }
   
  
  
  }