const I = actor();
const robot = require('robotjs');

module.exports = {

  validatePage() {
    I.seeInTitle('pages');
  },

  iCreateANewSite(name) {
    I.click(locate('a').withAttr( { title: 'add page'} ));
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
    I.click(locate('a').withAttr( { title: 'select \'' + name + '\''} ));
    I.see(text);
  },

  iEditPage(name, text) {
    I.say("test 1");
    I.see(name);
    I.click(locate('a').withAttr( { title: 'edit \'' + name + '\''} ));
    I.say("test 2");
    I.waitForText("editor", 3);
  },

  iClickActionForItem(action, item) {
    I.say('this should now click ' + action + ' for the item '+item);
    pause();
  },

  reorderItems(srcAssetName, targetName) {
    I.seeInTitle('pages');

    I.robotDragAndDropElements(locate('span.draggable').inside(locate('li').withText(srcAssetName)), locate('li').withText(targetName))
    I.wait(1);

    I.seeInTitle('pages');

    // test that ordering is correct
  }

}
