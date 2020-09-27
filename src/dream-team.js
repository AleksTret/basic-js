const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members.length === 0){
    return false;
  }
   
  let result = members.filter(item => {
    return typeof item === "string" && item.length !== 0;
  })

  return result.map(item => item.trim().toUpperCase()).sort().map(item => item[0]).join("");
};
