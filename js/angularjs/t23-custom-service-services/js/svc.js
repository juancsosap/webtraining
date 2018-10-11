app.service('validatorService', function () {
	var isRut = function (rut) {
			var regex = /^[1-9][0-9]?([.]?[0-9]{3}){2}[-][0-9kK]$/g;
			return regex.test(rut);
		};

	var getDV = function (rut) {
			var serie = [2, 3, 4, 5, 6, 7];
			var result = 0;

			for(i=rut.length-1; i>=0; i--){
				var digit = parseInt(rut.substring(i, i+1));
				var index = (rut.length-1-i) % 6;
				result += digit * serie[index];
			}

			result = 11 - (result % 11);

			return result == 11 ? "0" : result == 10 ? "k" : result.toString();
		};

	this.validateRut = function (input, callBackFunction) {
			var result = false;
			if(isRut(input)) {
				var cleanRut = input.replace(/[.]/g, '');
				var number = cleanRut.substring(0, cleanRut.length-2);
				var dv = input.substring(input.length-1, input.length);
				result = (dv == getDV(number));
			}
			callBackFunction(result);
		};
});
