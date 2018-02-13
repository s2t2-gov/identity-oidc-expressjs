process.env.NODE_ENV = 'test';

var expect = require('chai').expect;
const puppeteer = require('puppeteer');

var app = require('../../app.js');

describe('Visitor', function() {
  before(async function(){
    this.server = app.listen(9393);
    this.browser = await puppeteer.launch({headless: true});
  });

  context('when visiting the homepage', function() {
    before(async function(){
      this.page = await this.browser.newPage();
      await this.page.goto('http://localhost:9393');
      await this.page.screenshot({ path: 'homepage.png' });
    })

    it('should see the app title', async function() {
      //const headingText = await this.page.$('h1');
      const headingText = await this.page.title()
      expect(headingText).to.eql("Login.gov OIDC Client (Express.js)")
    });
  });

  after(function(done) {
    this.browser.close();
    this.server.close(done);
  });
});
