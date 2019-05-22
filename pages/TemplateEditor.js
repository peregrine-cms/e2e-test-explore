const I = actor();
const headlessMode = require('codeceptjs').config.get("headlessMode");

const header = ({"Content-Type": 'application/x-www-form-urlencoded'});

module.exports = {

    iAddComponent(siteName, templateName, componentType, targetLocator) {
        I.say('Adding ' + componentType + ' to template');

        I.seeTitleEquals('editor');

        let sourceLocator = locate('li').withAttr({draggable: "true"}).withText(componentType).as(componentType + " component");
        I.seeElement(sourceLocator);

        // Sending a click will make sure it's scrolled into view
        I.click(sourceLocator);

        // If not specified, add to the top of the template
        if(!targetLocator) {
            targetLocator = locate('div').withAttr({id: "editable"}).as("Page start")
        }

        if(headlessMode) {
            I.say("using REST API to add component");

            const payload = "component=/apps/" + siteName + "/components/" + componentType.toLowerCase() + "&drop=into-before&variation=sample";

            I.sendPostRequest("/perapi/admin/insertNodeAt.json/content/templates/" + siteName + "/" + templateName + "/jcr:content",
                payload, header);

            I.refreshPage();
        } else {
            I.say("dragging and dropping " + sourceLocator);
            I.robotDragAndDropElements(sourceLocator, targetLocator);
            I.wait(0.5);
        }
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
    },

    // Because of the iFrame, we can't just use I.see
    iSeeTextInEditor(textToSee) {
        within({frame: "#editview"}, () => {
            I.see(textToSee);
        });
    }




}
