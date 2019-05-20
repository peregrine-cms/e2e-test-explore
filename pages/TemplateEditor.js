const I = actor();
const config = require('codeceptjs').config;
const headlessMode = require('codeceptjs').config.get("headlessMode");
//const { headlessMode } = inject();

module.exports = {

    iAddComponent(componentType, targetLocator) {
        I.say('Adding ' + componentType + ' to template');

        I.seeTitleEquals('editor');
        I.wait(0.5);

        let sourceLocator = locate('li').withAttr({draggable: "true"}).withText(componentType).as(componentType + " component");
        I.seeElement(sourceLocator);

        // Sending a click will make sure it's scrolled into view
        I.click(sourceLocator);

        // If not specified, add to the top of the template
        if(!targetLocator) {
            targetLocator = locate('div').withAttr({id: "editable"}).as("Page start")
        }
        if(!config.get('headlessMode')) {
            I.say("dragging and dropping " + sourceLocator);
            I.robotDragAndDropElements(sourceLocator, targetLocator);
        }

        I.wait(0.5);
    },

    iReturnToTemplatesMenu() {
        I.click("templates");
    },

    iEditActiveComponentTitle(newTitle) {
        I.say("Editing component title");

        I.fillField(
            locate('input').withAttr({id: 'title'}).inside(locate('fieldset').inside(locate('div').withAttr({class: "editor-panel"}))).as("active component title"),
            newTitle);
    },

    iClickActiveComponentAccept() {
          I.click(locate('button').withAttr({title: "save"}).inside(locate('div').withAttr({class: "editor-panel-buttons"})).as("Save component"));
    },

    iClickComponent(componentText) {
        I.say("Clicking on component with text " + componentText);

        within({frame: "#editview"}, () => {
            I.click(locate('section').withText(componentText).as(componentText + " component"));
        });
    }




}
