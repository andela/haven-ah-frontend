module.exports = {
  'Title is Authors Haven': (browser) => {
    browser
      .url('https://haven-ah-frontend.herokuapp.com')
      .waitForElementVisible('body', 1000)
      .verify.title('Authors Haven')
      .end();
  }
};
