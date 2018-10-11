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
	var item = data.find(function (item) {
		return item.id == id;
	});
	return item ? item : null;
};

module.exports.post = function (item) {
	var maxId = data.reduce(function(previous, current) {
		return (previous.id > current.id) ? previous : current;
	}).id;
	item.id = (item.id < maxId) ? maxId + 1 : item.id;
	data.push(item);
	return item;
};

module.exports.delete = function (id) {
	var obj = null;
	data = data.filter(function(item) {
		obj = (item.id == id) ? item : obj;
		return (item.id != id);
	});
	return obj;
};
