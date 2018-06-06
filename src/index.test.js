import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {

  it('should pass', () => {
    expect(true).to.equal(true);
  });

});

describe('index.html', () => {

  // to be async, need to tell mocha to run async w/ (done)
  it('should say "hello, werld!"', (done) => {
    // now we have index.html in memory in "index"
    const index = fs.readFileSync('./src/index.html', "utf-8");
    // you CAN pass in an array here.. jsdom.env(index, file2, file3, function() {});
    jsdom.env(index, function(err, window) {
      // window represents the window in the browser
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello, Werld!");
      done();
      window.close();
    });
  });

});