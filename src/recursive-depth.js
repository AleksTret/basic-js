const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  	if (!Array.isArray(arr)){
    	return 0;
    }
  	let depth = 1;
    
    for(let i = 0 ; i < arr.length; i++){
    	depth = Math.max(this.calculateDepth(arr[i]) + 1, depth);      
    } 
   	return depth;  
  }
}
