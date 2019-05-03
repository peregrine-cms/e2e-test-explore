const I = actor();
const common = require('../libs/common')

module.exports = {

  validatePage() {
    I.seeInTitle('assets');

    I.say("valid page");
  },

  iCreateANewAsset(name) {
  },

  iDeleteAnAsset(name) {
    I.sendDeleteRequest('/content/assets/'+name);
  },

  iNavigateTo(name, text) {
    I.see(name);
    I.click(locate('a').withAttr( { title: 'select \'' + name + '\''} ));
    I.see(text);
  },

  iNavigateHome() {
    common.returnToHomeMenu();
  }

}
