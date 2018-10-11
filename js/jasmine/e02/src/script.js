var add = function (input) {
  var result = 0;
  for(var i = 0; i<input.length; i++)
    result += parseInt(input[i]);
  return result;
};
