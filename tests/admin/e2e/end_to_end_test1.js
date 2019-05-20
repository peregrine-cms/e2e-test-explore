
const testSiteName = "my-test-site";
const testSiteSubPage = "test-sub-page";
const testSubTemplateName = "subtemplate-1";
const testTemplateComponentTitle = "Test Template";
const headlessMode = require('codeceptjs').config.get("headlessMode");

// const { headlessMode } = inject();

Feature('End to End tests');

Before((login, pagesPage) => {
    login('admin');
    pagesPage.iDeleteASite(testSiteName);
});

After(pagesPage => {
    pagesPage.iDeleteASite(testSiteName);
});


Scenario('Full site use', (I, recorder, welcomePage, pagesPage, homePage, templatesPage, templateEditor, pageEditor) => {

    I.say('Creating a new site name ' + testSiteName + " ... " + headlessMode);

    //I.showConsoleLog();

    // creating a new site, add a page, add a component

    // I.startRecording();
    welcomePage.iAmOnThePage();

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo("Sites", pagesPage);

    pagesPage.iCreateANewSite(testSiteName);

    pagesPage.iNavigateTo(testSiteName, 'Sample Sites');

    I.wait(1);

    pagesPage.iNavigateHome();

    homePage.navigateTo("Templates", templatesPage);

    templatesPage.iSeeTemplate(testSiteName);

    I.say("Clicking on info button");
    templatesPage.iClickActionForTemplate("info", testSiteName);
    I.see("Created By");

    templatesPage.iNavigateTo(testSiteName, testSiteName);

    templatesPage.iCreateANewTemplate(testSubTemplateName);

    I.wait(1);
    templatesPage.iEditTemplate(testSubTemplateName);

    templateEditor.iAddComponent('Accordion');
    templateEditor.iAddComponent('Carousel');

    I.wait(1);

    if(!headlessMode) {
        templateEditor.iClickComponent("Peregrine Accordion");

        templateEditor.iEditActiveComponentTitle(testTemplateComponentTitle);
        templateEditor.iClickActiveComponentAccept();
    }

    templateEditor.iReturnToTemplatesMenu();

    templatesPage.iNavigateHome();

    homePage.navigateTo("Sites", pagesPage);

    //pagesPage.iNavigateTo(testSiteName, 'Sample Sites');

    pagesPage.iAddAPage(testSiteSubPage, testSubTemplateName);

    pagesPage.iEditPage(testSiteSubPage, "editor");

    I.wait(2);

    if(!headlessMode) {
        pageEditor.iSeeTextInEditor(testTemplateComponentTitle);
    }
}).tag("@e2e").tag("@endToEndTest1");
