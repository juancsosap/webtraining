describe('Scope Specs', function () {

  beforeAll(() => {
    this.counter = 0;
    console.log(`Initial value of the counter variable: ${this.counter}`);
  });

  afterAll(() => {
    console.log(`Final value of the counter variable: ${this.counter}`);
  });

  beforeEach(() => {
    this.counter += 1;
    console.log(`New value of the counter variable (Before): ${this.counter}`);
  });

  afterEach(() => {
    this.counter += 2;
    console.log(`New value of the counter variable (After): ${this.counter}`);
  });

  it('Test # 1', () => {
    expect().nothing();
    console.log('Test # 1');
  });

  it('Test # 2', () => {
    expect().nothing();
    console.log('Test # 2');
  });

  it('Test # 3', () => {
    expect().nothing();
    console.log('Test # 3');
  });

  it('Test # 4', () => {
    expect().nothing();
    console.log('Test # 4');
  });

  it('Test # 5', () => {
    expect().nothing();
    console.log('Test # 5');
  });

});
