describe('Spy Specs', function () {

  var spyAPI;

  beforeEach(function () {
    spyAPI = new userAPISpy();
  });

  it('Getting data Normally', function () {
    var data = spyAPI.getAll();

    expect(spyAPI.getQuantity()).toBe(2);
    expect(data.length).toBe(2);

    spyAPI.addOne('Ana', 'Prada');

    expect(spyAPI.getQuantity()).toBe(3);
    expect(spyAPI.getOne(2).name).toBe('Ana');
  });

  it('Calling API throw the Spy', function () {
    spyOn(spyAPI, 'getAll');
    spyOn(spyAPI, 'getOne').and.stub(); // Default
    spyOn(spyAPI, 'addOne');

    var data = spyAPI.getAll();

    expect(spyAPI.getQuantity()).toBe(2);
    expect(data).toBeUndefined();
    expect(spyAPI.getAll).toHaveBeenCalled();
    expect(spyAPI.getOne).not.toHaveBeenCalled();

    spyAPI.addOne('Ana', 'Prada');
    expect(spyAPI.getQuantity()).toBe(2);
    expect(spyAPI.addOne).toHaveBeenCalledWith('Ana', 'Prada');
  });

  it('Getting data throw the Spy', function () {
    spyOn(spyAPI, 'getAll').and.callThrough();
    spyOn(spyAPI, 'getOne').and.returnValue({name: 'Griselda', surname: 'Perez'});

    var data = spyAPI.getAll();

    expect(data.length).toBe(2);
    expect(spyAPI.getOne(0).name).toEqual('Griselda');
    expect(spyAPI.getOne(1).surname).toEqual('Perez');
  });

  it('Calling API throw the Spy (Fake)', function () {
    spyOn(spyAPI, 'getAll').and.callFake(() => spyAPI.getOne(0));

    expect(spyAPI.getQuantity()).toBe(2);
    expect(spyAPI.getAll()).toEqual(spyAPI.getOne(0));
  });

  it('Calling API throw the Spy (Throws Error)', function () {
    spyOn(spyAPI, 'addOne').and.throwError('Not Allowed');

    expect(() => spyAPI.addOne()).toThrowError('Not Allowed');
  });

  it('Spy Calls', function () {
    spyOn(spyAPI, 'getOne').and.callThrough();
    spyOn(spyAPI, 'getAll').and.callThrough();
    spyOn(spyAPI, 'addOne').and.callThrough();

    spyAPI.addOne('Pepe', 'Lopez');
    spyAPI.addOne('Luis', 'Ahumada');
    spyAPI.addOne('Maria', 'Rios');

    for(var i = 0; i < spyAPI.getQuantity(); i++)
      console.log(spyAPI.getOne(i));

    expect(spyAPI.getOne.calls.any()).toBeTruthy();
    expect(spyAPI.getAll.calls.any()).toBeFalsy();

    expect(spyAPI.getOne.calls.count()).toBe(5);
    expect(spyAPI.getAll.calls.count()).toBe(0);
    expect(spyAPI.addOne.calls.count()).toBe(3);

    expect(spyAPI.getOne.calls.argsFor(1)).toEqual([1]);
    expect(spyAPI.addOne.calls.argsFor(1)).toEqual(['Luis', 'Ahumada']);

    expect(spyAPI.addOne.calls.allArgs()).toEqual([['Pepe', 'Lopez'],
                                                   ['Luis', 'Ahumada'],
                                                   ['Maria', 'Rios']]);

    console.log(spyAPI.addOne.calls.all());

    spyAPI.addOne.calls.reset();

    expect(spyAPI.addOne.calls.any()).toBeFalsy();
  });

});

describe('Created Spy Specs', function () {

  it('Creating Spy Function on the fly', function () {
    var spy = jasmine.createSpy('spyFunction');

    expect(spy).not.toHaveBeenCalled();

    spy('Juan', 'Sosa');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Juan', 'Sosa');
  });

  it('Creating Spy Object on the fly', function () {
    var spy = jasmine.createSpyObj('spyObject', ['getAll', 'getOne', 'addOne']);

    spy.getAll();
    spy.getOne(0);
    spy.addOne('Juan', 'Sosa');

    expect(spy.getAll).toHaveBeenCalled();
    expect(spy.getOne).toHaveBeenCalled();
    expect(spy.addOne).toHaveBeenCalled();

    expect(spy.getOne).toHaveBeenCalledWith(0);
    expect(spy.addOne).toHaveBeenCalledWith('Juan', 'Sosa');
  });

});
