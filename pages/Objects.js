
const I = actor();
const Ii = require('../libs/common');
const lorem = require('../libs/lorem');

module.exports = {

  validatePage() {
    I.seeInTitle('objects');
  },

  iCreateANewObject(name, type) {
    I.click(locate('a').withAttr( { title: 'add object'} ));
    I.see("create an object");
    I.click(locate('a').withAttr( { title: type} ));
    I.click('Next');
    I.fillField('#object-name',name);
    I.click('Next');

    if(type === "tag") {
      I.fillField('#display-value',name);
    } else if (type === "allfields") {
      I.fillField('#text-field', lorem.generateWords(6));
      I.fillField('#text-area', lorem.generateSentences(2));
      I.click('#checkbox');

      Ii.clickDatePopup("11");
      Ii.clickTimePopup('08','16');
      Ii.clickDateTimePopup("1", "02", "03");

      // pause();
    } else if (type === "collection") {

    } else if (type === "datetest") {

    } else if (type === "sample") {

    }

    I.click('Finish');
  },

  iDeleteAnObject(name) {
    I.sendDeleteRequest('/content/objects/'+name);
  },

  iClickDeleteForAnObject(name) {

  },

  iNavigateTo(name, text) {
    I.see(name);
    I.click(locate('a').withAttr( { title: 'select \'' + name + '\''} ));
    I.see(text);
  },

  iNavigateHome() {
    Ii.returnToHomeMenu();
  }
}
