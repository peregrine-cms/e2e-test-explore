const I = actor();

module.exports = {

  iAmOnThePage() {
    I.amOnPage('/index.html')
    this.validatePage();
  },

  validatePage() {
    I.wait(1);
    I.see('welcome');
  },

  navigateTo(linkText, target) {
    I.click(linkText);
    target.validatePage();
  }
}
