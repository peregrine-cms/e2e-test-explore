const I = actor();

module.exports = {

  validatePage() {
    I.seeInTitle('pages');
  },

  iCreateANewSite(name) {
    I.click(locate('a').withAttr( { title: 'add page'} ));
    I.click('Next');
    I.fillField('#site-name',name);
    I.click('Next');
    I.clickLink('Finish');
  },

  iDeleteASite(name) {
    I.sendDeleteRequest('/apps/'+name);
    I.sendDeleteRequest('/content/sites/'+name);
    I.sendDeleteRequest('/content/assets/'+name);
    I.sendDeleteRequest('/content/objects/'+name);
    I.sendDeleteRequest('/content/templates/'+name);
    I.sendDeleteRequest('/etc/felibs/'+name);
  },

  iNavigateTo(name, next) {
    I.see(name);
    I.click(name);
    I.see(next);
  },

  iClickActionForItem(action, item) {
    I.say('this shod now click '+action+' for the item '+item);
    pause();
  }

}
