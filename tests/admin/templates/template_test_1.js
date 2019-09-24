
Feature('Template creation after site creation');

const { I, recorder, welcomePage, pagesPage, homePage, templatesPage, templateEditor } = inject();

const testSiteTitle = "Template Test 1";
const testSiteName = "template_test_1";
const testSubTemplateTitle = "Subtemplate 1";
const testSubTemplateName = "subtemplate-1";
const basePage = "base page";

Before((login, pagesPage) => {
    login('admin');
    pagesPage.iDeleteASite(testSiteName);
});

After(pagesPage => {
    pagesPage.iDeleteASite(testSiteName);
    pagesPage.iDeleteAPackageGroup(testSiteName);
});


Scenario('template testing', () => {

    I.say('Template test');

    // I.startRecording();
    welcomePage.iAmOnThePage();

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo("Sites", pagesPage);

    pagesPage.iCreateANewSite(testSiteTitle, testSiteName);

    pagesPage.iNavigateHome();

    I.wait(2);

    homePage.navigateTo("Templates", templatesPage);

    templatesPage.iSeeTemplate(testSiteTitle);

    I.say("Clicking on info button");
    templatesPage.iClickActionForTemplate("info", testSiteTitle);
    I.see("Created By");

    templatesPage.iNavigateTo(testSiteTitle, basePage);

    templatesPage.iCreateANewTemplate(testSubTemplateTitle, testSubTemplateName);

    templatesPage.iEditTemplate(testSubTemplateTitle);

    templateEditor.iAddComponent(testSiteName, testSubTemplateName, 'Teaser Horizontal');
    templateEditor.iAddComponent(testSiteName, testSubTemplateName, 'Article Quote');

}).tag('@templates').tag('@templateTest1');
