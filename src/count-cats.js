const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((prev, item, ) => {
    return prev + item.reduce((prev, item)=> {
      return prev = prev + (item === "^^" ? 1 : 0);
    }, 0);
  }, 0);

};
