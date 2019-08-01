describe('Skipped Specs', function () {

  xdescribe('Describe # 1', function () {
    it('Test # 1.1', () => expect().nothing());
    it('Test # 1.2', () => expect().nothing());
  });

  describe('Describe # 2', function () {
    it('Test # 2.1');
    xit('Test # 2.2', () => expect().nothing());
    it('Test # 2.3', () => {
      expect().nothing();
      pending('Temporarily disabled with pending');
    });
    it('Test # 2.4', () => expect().nothing());
  });

});
