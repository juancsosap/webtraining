var userAPISpy = function () {
  this.users = [{name:'Juan', surname:'Sosa'},
                {name:'Carlos', surname:'Peña'}];

  this.getAll = function () {
    return this.users;
  };

  this.getQuantity = function () {
    return this.users.length;
  };

  this.getOne = function (index) {
    return this.users[index];
  };

  this.addOne = function (name, surname) {
    return this.users.push({'name': name, 'surname': surname});
  };

};
