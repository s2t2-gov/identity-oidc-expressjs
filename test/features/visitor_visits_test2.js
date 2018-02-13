process.env.NODE_ENV = 'test';

var expect = require('chai').expect;
const puppeteer = require('puppeteer');

var app = require('../../app.js');

describe('Visitor', function() {
  let server, browser;

  before(async function(){
    server = app.listen(9393);
    browser = await puppeteer.launch({headless: true});
  });

  context('when visiting the homepage', function() {
    let page;

    before(async function(){
      page = await browser.newPage();
      await page.goto('http://localhost:9393');
      await page.screenshot({ path: 'homepage.png' });
    })

    it('should see the app title', async function() {
      //const headingText = await page.$('h1');
      const headingText = await page.title()
      expect(headingText).to.eql("Login.gov OIDC Client (Express.js)")
    });
  });

  after(function(done) {
    browser.close();
    server.close(done);
  });
});
