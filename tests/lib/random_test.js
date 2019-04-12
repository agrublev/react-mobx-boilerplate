Feature("click");
const { record } = require("puppeteer-recorder");

Scenario("test something",  (I, Auth) => {
  record({
    output: "output.webm",
    fps: 60,
    frames: 60 * 5 // 5 seconds at 60 fps
  });
  I.amOnPage("https://app.freedcamp.chat");
  I.waitForVisible("h3");
  I.see("Login", "h3");
  Auth.sendForm("asdsad@asdasd.com", "asdsad@asdasd.com");
  I.waitForVisible(".fchat-user");
  //    I.saveScreenshot("Codecept_IO_Screenshot_Image.png");
  //     I.seeVisualDiff("Codecept_IO_Screenshot_Image.png", {tolerance: 2, prepareBaseImage: false});
});

// SESSSSIONS FOR CHAT
//Scenario('test app', (I) => {
//   I.amOnPage('/chat');
//   I.fillField('name', 'davert');
//   I.click('Sign In');
//   I.see('Hello, davert');
//   session('john', () => {
//     // another session started
//     I.amOnPage('/chat');
//     I.fillField('name', 'john');
//     I.click('Sign In');
//     I.see('Hello, john');
//   });
//   // switching back to default session
//   I.fillField('message', 'Hi, john');
//   // there is a message from current user
//   I.see('me: Hi, john', '.messages');
//   session('john', () => {
//     // let's check if john received it
//     I.see('davert: Hi, john', '.messages');
//   });
// });

// WELL WRTITTEBN
//// you can provide RegEx to match corresponding steps
// Given(/I have product with \$(\d+) price/, (price) => {
//   I.amOnPage('/products');
//   I.click(`.product[data-price=${price}]`);
//   I.click('Add to cart');
// });
//
// // or a simple string
// When('I go to checkout process', () => {
//   I.click('Checkout');
// });
//
// // parameters are passed in via Cucumber expressions
// Then('I should see that total number of products is {int}', (num) => {
//   I.see(num, '.cart');
// });
// Then('my order amount is ${int}', (sum) => { // eslint-disable-line
//   I.see('Total: ' + sum);
// });

//fake roviding a factory for User generation:
//
// // factories/post.js
// var Factory = require('rosie').Factory;
// var faker = require('faker');
//
// module.exports = new Factory()
//   .attr('name', () => faker.name.findName())
//   .attr('email', () => faker.internet.email());
