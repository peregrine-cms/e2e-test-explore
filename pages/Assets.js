const I = actor();
const Ii = require('../libs/common');

module.exports = {

  validatePage() {

    I.seeInTitle('assets');

    I.say("valid page");
  },

  iCreateANewAsset(name) {
  },

  iUploadAnAsset(path) {
    I.say("Uploading asset from path: " + path);

    I.attachFile(locate('input').withAttr({type: "file"}), path);
  },

  iDeleteAnAsset(name) {
    I.sendDeleteRequest('/content/assets/'+name);
  },

  iNavigateTo(name, text) {
    I.see(name);
    I.click(locate('a').withAttr( { title: 'select \'' + name + '\''} ));
    I.see(text);
  },

  iValidateAssetText(assetName, text) {
    I.see(assetName);
    I.click(locate('a').withAttr( { title: 'select \'' + assetName + '\''} ));
    
    within({frame: "iframe"}, () => {
      I.see(text);
    });
  },

  iNavigateHome() {
    Ii.returnToHomeMenu();
  }

}
