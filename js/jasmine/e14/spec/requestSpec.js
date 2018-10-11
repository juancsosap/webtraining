var request = require('request');

var url = 'https://jsonplaceholder.typicode.com/posts';

describe('Async Request', function () {
  it('Success GET Request', function (done) {
    request.get(url, function (erro, resp, body) {
      expect(resp.statusCode).toBe(200);
      expect(body.length).toBeGreaterThan(0);
      //done();
    });
  });
});
