const { I, homeButton } = inject();

module.exports = {

  validatePage() {
    I.seeInTitle('assets');
  },

  iCreateANewAsset(name) {
  },

  iUploadAnAsset(path) {
    I.say("Uploading asset from path: " + path);

    I.attachFile(locate('input').withAttr({type: "file"}).as("Upload Asset"), path);
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
    I.click(locate('a').withAttr( { title: 'select \'' + assetName + '\''} ).as("Select asset " + assetName));

    within({frame: "iframe"}, () => {
      I.see(text);
    });
  },

  iNavigateHome() {
    homeButton.returnToHomeMenu();
  }

}
