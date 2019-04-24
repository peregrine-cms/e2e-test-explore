const I = actor();
const event = require('codeceptjs').event;

const robot = require('robotjs');

module.exports = {

    async iAddComponentAt(componentType, location) {
        I.say('Adding a component next...');

        pause();
        I.seeElement(locate('li').withText(componentType) );

        //    I.dragAndDrop(locate('li').withText(componentType), "//*[@id=\"editable\"]") //"//*[@id=\"peregrine-app\"]/span/div/div[3]")
        // .as('a component named \'' + componentType + '\'')
        // dragAndDrop(locate('li').withText('Accordion'), "//*[@id=\"editable\"]")

        I.seeTitleEquals('editor');
        I.wait(1);

        I.robotDragAndDrop({x: 1000, y: 519}, {x: 127, y: 622});
        I.wait(1);


        I.seeElement(locate('li').withText(componentType) );

         // pause();
  }

}
