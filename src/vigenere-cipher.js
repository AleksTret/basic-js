const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (value = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.direct = value;
  }

  encrypt(messageInput, keyInput) {
		return this.crypt(messageInput, keyInput, true);
  }    
  decrypt(messageInput, keyInput) {
		return this.crypt(messageInput, keyInput, false)
  }
  
  crypt(messageInput, keyInput, isEncrypt){
  	 if(messageInput === undefined || keyInput === undefined){
    	throw new Error();
    }
    
    let key = keyInput.toUpperCase().split("").map(item =>{
    	return this.alphabet.indexOf(item);
    });

		let keyIndex = 0;
    
    let result = messageInput.toUpperCase().split("").map(item => {
    	let position = this.alphabet.indexOf(item); 
      if(~position){        
      	let index = isEncrypt ? 
        							this.indexForEncrypt(position, key, keyIndex++) :
                      this.indexForDecrypt(position, key, keyIndex++);
        return this.alphabet[index];
      }
      else{
      	return item;
      }
    });
    
    return this.direct ? result.join("") : result.reverse().join("");
  }
  
  indexForEncrypt(position, key, keyIndex) {
  	return (position + key[keyIndex++ % key.length]) % this.alphabet.length;
  }
  
  indexForDecrypt(position, key, keyIndex) {
  	return ((position - key[keyIndex++ % key.length]) + this.alphabet.length) % this.alphabet.length;
  }
}


module.exports = VigenereCipheringMachine;
