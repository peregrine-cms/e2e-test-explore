
Feature('End to End tests');

const { I, recorder, welcomePage, pagesPage, homePage, templatesPage, templateEditor, pageEditor } = inject();

const testSiteTitle = "My Test Site";
const testSiteName = "my_test_site";
const testSiteSubPageTitle = "Test Sub Page";
const testSiteSubPage = "test-sub-page";
const testSubTemplateTitle = "Subtemplate 1";
const testSubTemplateName = "subtemplate-1";
const testTemplateComponentTitle = "Test Template";
const basePage = "base page";

Before((login, pagesPage) => {
    login('admin');
    pagesPage.iDeleteASite(testSiteName);
});

After(pagesPage => {
    pagesPage.iDeleteASite(testSiteName);
    pagesPage.iDeleteAPackageGroup(testSiteName);
});


Scenario('Full site use', () => {

    I.say('Creating a new site name ' + testSiteName);

    //I.showConsoleLog();

    // creating a new site, add a page, add a component

    // I.startRecording();
    welcomePage.iAmOnThePage();

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo("Sites", pagesPage);

    pagesPage.iCreateANewSite(testSiteTitle, testSiteName);

    pagesPage.iNavigateTo(testSiteTitle, 'Sample Sites');

    I.wait(1);

    pagesPage.iNavigateHome();

    homePage.navigateTo("Templates", templatesPage);

    templatesPage.iSeeTemplate(testSiteTitle);

    I.say("Clicking on info button");
    templatesPage.iClickActionForTemplate("info", testSiteTitle);
    I.see("Created By");

    templatesPage.iNavigateTo(testSiteTitle, basePage);

    templatesPage.iCreateANewTemplate(testSubTemplateTitle, testSubTemplateName);

    templatesPage.iEditTemplate(testSubTemplateTitle);

    templateEditor.iAddComponent(testSiteName, testSubTemplateName, 'Accordion');
    templateEditor.iAddComponent(testSiteName, testSubTemplateName, 'Carousel');

    templateEditor.iClickComponent("Peregrine Accordion");
    templateEditor.iEditActiveComponentTitle(testTemplateComponentTitle);
    templateEditor.iClickActiveComponentAccept();


    templateEditor.iReturnToTemplatesMenu();

    templatesPage.iNavigateHome();

    homePage.navigateTo("Sites", pagesPage);

    //pagesPage.iNavigateTo(testSiteName, 'Sample Sites');

    pagesPage.iAddAPage(testSiteSubPageTitle, testSiteSubPage, testSubTemplateName);

    pagesPage.iEditPage(testSiteSubPageTitle, "editor");

    I.wait(0.5);

    pageEditor.iSeeTextInEditor(testTemplateComponentTitle);

}).tag("@e2e").tag("@endToEndTest1");
