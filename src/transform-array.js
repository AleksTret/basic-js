const CustomError = require("../extensions/custom-error");


module.exports = function transform(inputArr) {
    let controlSequence = ["--discard-next", "--discard-prev",
      "--double-next", "--double-prev"];
  
    if(!Array.isArray(inputArr))
      throw new Error();
    
    let result = inputArr.slice(0);
  
    for(let index = 0 ; index < result.length; index++){
      switch(result[index]){
      
        //case "--discard-next":
        case controlSequence[0]:
          result[index] = undefined;      
          
          if (index + 1 < result.length){            	
            result[index + 1] = undefined;       
          } 
    
        break;
    
        //case "--discard-prev" :
        case controlSequence[1]:  
          result[index] = undefined;
          
          if (index > 0){
            result[index - 1] = undefined;
          }
    
        break;
        
        // case  "--double-next":
        case controlSequence[2]:
          result[index] = undefined;
        
          if (index + 1 < result.length){            	
            result[index] = result[index + 1];        
          } 
        
        break;
    
        //case  "--double-prev":
        case controlSequence[3]:
          result[index] = undefined;
          if (index > 0){
            result[index] = result[index - 1];
          }
    
        break;
      }
    };

    return result.filter((item) => item != undefined);
  }
  