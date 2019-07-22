const { I, homeButton } = inject();
const headlessMode = require('codeceptjs').config.get("headlessMode");

module.exports = {

  validatePage() {
    I.seeInTitle('pages');
  },

  iCreateANewSite(name) {
    I.click(locate('a').withAttr( { title: 'add site'} ).as('create site'));
    I.click('Next');
    I.fillField('#site-name',name);
    I.click('Next');
    I.click('Finish');
  },

  iDeleteASite(name) {
    I.sendDeleteRequest('/apps/'+name);
    I.sendDeleteRequest('/content/sites/'+name);
    I.sendDeleteRequest('/content/assets/'+name);
    I.sendDeleteRequest('/content/objects/'+name);
    I.sendDeleteRequest('/content/templates/'+name);
    I.sendDeleteRequest('/etc/felibs/'+name);
  },

  iNavigateTo(name, text) {
    I.see(name);
    I.click(locate('a').withAttr( { title: 'select \'' + name + '\''} ).as(name + ' link'));
    I.see(text);
  },

  iEditPage(name, text) {
    I.see(name);
    I.click(locate('a').withAttr( { title: 'edit \'' + name + '\''} ).as('edit ' + name));
    I.waitForText("editor", 3);
  },

  iAddAPage(pageName, templateName) {
    I.click(locate('a').withAttr( { title: 'add page'} ).as('add page'));
    I.click(templateName);
    I.click('Next');
    I.fillField('#page-name',pageName);
    I.click('Next');
    I.click('Finish');
  },

  iClickActionForItem(action, item) {
    // I.say('this should now click ' + action + ' for the item '+item);
  },

  reorderItems(srcAssetName, targetName) {
    I.seeInTitle('pages');

    if(!headlessMode) {
      I.robotDragAndDropElements(locate('span.draggable').inside(locate('li').withText(srcAssetName)), locate('li').withText(targetName))
    }
    I.wait(1);

    I.seeInTitle('pages');

    // test that ordering is correct
  },

  iNavigateHome() {
    homeButton.returnToHomeMenu();
  }

}
