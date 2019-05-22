
const testSiteName = "template-test-1";
const testSubTemplateName = "subtemplate-1";

Feature('Template creation after site creation');

Before((login, pagesPage) => {
    login('admin');
    pagesPage.iDeleteASite(testSiteName);
});

After(pagesPage => {
    pagesPage.iDeleteASite(testSiteName);
});


Scenario('template testing', (I, recorder, welcomePage, pagesPage, homePage, templatesPage, templateEditor) => {

    I.say('Template test');

    // I.startRecording();
    welcomePage.iAmOnThePage();

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo("Sites", pagesPage);

    pagesPage.iCreateANewSite(testSiteName);

    pagesPage.iNavigateHome();

    I.wait(2);

    homePage.navigateTo("Templates", templatesPage);

    templatesPage.iSeeTemplate(testSiteName);

    I.say("Clicking on info button");
    templatesPage.iClickActionForTemplate("info", testSiteName);
    I.see("Created By");

    templatesPage.iNavigateTo(testSiteName, testSiteName);

    templatesPage.iCreateANewTemplate(testSubTemplateName);

    templatesPage.iEditTemplate(testSubTemplateName);

    templateEditor.iAddComponent(testSiteName, testSubTemplateName, 'Teaser Horizontal');
    templateEditor.iAddComponent(testSiteName, testSubTemplateName, 'Article Quote');

}).tag('@templates').tag('@templateTest1');
