const convertToCelsius = function(temp) {
  let result = (temp - 32) * 5/9;
  return (!Number.isInteger(result)) ? Number(result.toFixed(1)) : result;
};

const convertToFahrenheit = function(temp) {
  let result = (temp * 9/5) + 32;
  return (!Number.isInteger(result)) ? Number(result.toFixed(1)) : result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
