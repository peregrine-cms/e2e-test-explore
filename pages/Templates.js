const I = actor();
const Ii = require('../libs/common');

module.exports = {

  validatePage() {
    I.seeInTitle('templates');
  },

  // Does not work top-level!
  iCreateANewTemplate(name) {
    I.click(locate('a').withAttr( { title: 'add template'} ));
    I.click('Next');
    I.fillField('#template-name',name);
    I.click('Next');
    I.click('Finish');
  },

  iDeleteATemplate(name) {
    I.sendDeleteRequest('/content/templates/'+name);
  },

  iSeeTemplate(name) {
    I.see(name);
  },

  iNavigateTo(name, text) {
    I.see(name);
    I.click(locate('a').withAttr( { title: 'select \'' + name + '\''} ));
    I.see(text);
  },

  iEditTemplate(name, text) {
  },

  iClickActionForTemplate(action, templateName) {
    I.say('this should now click ' + action + ' for the item ' + templateName);

    // TODO: switch this to a less fragile locator
    I.click("//span/div/div[1]/div/div/div[1]/ul/li[contains(., '" + templateName + "')]" +
        "//a[contains(.,'" + action + "')]");

  },

  iNavigateHome() {
    Ii.returnToHomeMenu();
  }
}
