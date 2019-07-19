const { I, homeButton } = inject();

module.exports = {

  validatePage() {
    I.seeInTitle('assets');
  },

  iCreateANewAsset(name) {
  },

  iCreateANewFolder(name) {
    I.click(locate('a').withAttr( { title: 'add folder'} ).as("Add Folder"));
    I.fillField('#folder-name',name);
    I.click('Next');
    I.click('Finish');
  },

  iUploadAnAsset(path) {
    I.say("Uploading asset from path: " + path);

    I.attachFile(locate('input').withAttr({type: "file"}).as("Upload Asset"), path);
  },

  iDeleteAnAsset(name) {
    I.sendDeleteRequest('/content/assets/'+name);
  },

  iDeleteAnAssetThroughUi(name) {
    I.click(locate('a').withAttr( { title: "delete '" + name + "'"}).as("Delete Asset: " + name));
    I.acceptPopup();
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
  },

  iNavigateUpALevel() {
    I.click(locate('a').withAttr( { title: 'select parent'} ).as("Select parent"));
  },

  iEditAnAssetTextProperty(assetName, propertyId, value) {
    I.see(assetName);
    I.click(locate('a').withAttr( { title: 'select \'' + assetName + '\''} ).as("Select asset " + assetName));
    I.click(locate('a').withAttr( { title: 'edit'} ).as("Edit asset " + assetName));
    I.fillField(propertyId, value);
    I.click(locate('button').withAttr( { title: 'save page properties'} ).as("Save Properties"));
  },

  iMoveAnAsset(assetName, pathToNewLocation) {
    let selectPrefix = "select-/content/assets/";
    I.see(assetName);
    I.click(locate('a').withAttr( { title: 'select \'' + assetName + '\''} ).as("Select asset " + assetName));
    I.click(locate('a').withAttr( { title: 'move asset'} ).as("Move asset " + assetName));
    let pathParts = pathToNewLocation.split("/");
    within('.modal-container', () => {
      for(var i = 0; i < pathParts.length; i++ ) {
        if(i < pathParts.length - 1) {
          I.click(locate('span').withText(pathParts[i]).as("Label for " + pathParts[i]));
        }
        else {
          //I.click(locate({id:selectPrefix+pathToNewLocation}).as("Selection radio for " + pathParts[i]));
          I.click(locate('label').withAttr({"data-per-name": pathParts[i]}).as("Selection radio for " + pathParts[i]));
          I.click("select");
        }
      }
    });
  }

}
