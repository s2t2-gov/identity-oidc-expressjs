process.env.NODE_ENV = 'test';

//var app = require('../../app.js');

describe('Visitor', function() {
  let server;

  //before(async function(){
  //  server = app.listen(9393);
  //});

  context('when visiting the homepage', function() {
    //before(function(){
    //  cy.visit('http://localhost:9393');
    //})

    it('should see the app title', function() {
      cy.visit('http://localhost:9393');
      //expect(cy.contains("Login.gov OIDC Client (Express.js)")).to.eql(true)
      cy.contains("Login.gov OIDC Client (Express.js)")
    });
  });

  //after(function(done) {
  //  server.close(done);
  //});
});
