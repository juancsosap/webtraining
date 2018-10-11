var data = [{id: 1, name: 'Juan', surname: 'Peña', age: 36},
            {id: 2, name: 'Ana', surname: 'Perez', age: 35},
            {id: 3, name: 'Sarah', surname: 'Sosa', age: 6},
            {id: 4, name: 'Jadash', surname: 'Prada', age: 4}]

module.exports.get = function (offset = 0, limit = 10) {
	var offset = parseInt(offset);
	var limit = parseInt(limit);

	var size = data.length;
	var begin = (offset >= 0 && offset < size) ? offset : size;
	var end = (limit > 0 && (offset + limit) <= size) ? (offset + limit) : size;
	return data.slice(begin, end);
};

module.exports.getById = function (id) {
	for(var i=0; i<data.length; i++) {
		if(data[i].id == id) {
			return data[i];
		}
	}
	return null;
};
