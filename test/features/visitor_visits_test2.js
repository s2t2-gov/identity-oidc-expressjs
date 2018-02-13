process.env.NODE_ENV = 'test';

const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:9393');
    await page.screenshot({ path: 'homepage.png' });
  } catch (error) {
    console.log(error);
    browser.close();
  }

  browser.close();
}

run();


//var expect = require('chai').expect;
//var app = require('../../app.js');
//
//describe('Visitor', function() {
//  //before(function(){
//  //  this.browser = await puppeteer.launch()
//  //})
//
//  context('when visiting the homepage', function() {
//    //before(function(done){
//    //  this.browser.visit('/', done);
//    //})
//
//    it('should see the app title', function() {
//      const browser = await puppeteer.launch();
//      const page = await browser.newPage();
//
//      await page.goto('https://github.com');
//      await page.screenshot({ path: 'screenshots/github.png' });
//
//      browser.close();
//
//      //expect(this.browser.text('h1')).to.eql("Login.gov OIDC Client (Express.js)");
//    });
//  });
//
//  //after(function(done) {
//  //  this.server.close(done); // stop the server when done!
//  //});
//});
