const { I, homeButton } = inject();

module.exports = {

  validatePage() {
    I.seeInTitle('templates');
  },

  // Does not work top-level!
  iCreateANewTemplate(title, name) {
    I.click(locate('a').withAttr( { title: 'add template'} ).as('add template'));
    I.click('Next');
    I.fillField('#template-title',title);
    if(name !== undefined) {
      I.fillField('#template-name',name);
    }
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
    I.click(locate('a').withAttr( { title: 'select \'' + name + '\''} ).as('select \"' + name + '\"'));
    I.see(text);
  },

  iEditTemplate(name) {
    I.see(name);
    I.click(locate('a').withAttr( { title: 'edit \'' + name + '\''} ).as('edit template ' + name));
    I.waitForText("editor", 3);
  },

  iClickActionForTemplate(action, templateName) {
    I.say('Clicking ' + action + ' for the item ' + templateName);

    I.click(locate('a').withText(action).inside(locate('li').withText(templateName)).as("\'" + action + "\' for template \'" + templateName + "\'"));
  },

  iNavigateHome() {
    homeButton.returnToHomeMenu();
  }
}
