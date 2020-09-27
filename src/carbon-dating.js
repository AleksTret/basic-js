const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let number = parseFloat(sampleActivity);
  if (typeof sampleActivity === 'string' 
    && !isNaN(number) 
    && (number > 0 && number <= MODERN_ACTIVITY)) 
    {
      return Math.ceil(Math.log(MODERN_ACTIVITY / number) /
        (Math.round(Math.LN2 * 1000) / 1000 / HALF_LIFE_PERIOD));
    }
  return false;
};