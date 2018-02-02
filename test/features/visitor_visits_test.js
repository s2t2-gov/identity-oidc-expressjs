process.env.NODE_ENV = 'test';

var Browser = require('zombie');
var expect = require('chai').expect;
var http = require('http');

var app = require('../../app.js');

//Browser.silent = true; // isn't working...

describe('Visitor', function() {
  before(function(){
    this.server = http.createServer(app).listen(9393);
    this.browser = new Browser({ site: 'http://localhost:9393' });
    //this.browser.silent = true; // isn't working...
  })

  context('when visiting the homepage', function() {
    before(function(done){
      this.browser.visit('/', done);
    })

    it('should see the app title', function() {
      expect(this.browser.text('h1')).to.eql("Login.gov OIDC Client (Express.js)");
    });
  });

  after(function(done) {
    this.server.close(done); // stop the server when done!
  });
});
