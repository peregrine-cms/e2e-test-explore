
const testPageComponentTitle = "New title from editor"

Feature('Create site');

const dragTestSite = "test_X";
let testSites = ['test1', 'test2'];
let sites = new DataTable(['siteName']);
testSites.forEach((site) => {
    sites.add([site]);
});

BeforeSuite(pagesPage => {
    testSites.forEach((site) => {
        pagesPage.iDeleteASite(site);
    });
    pagesPage.iDeleteASite(dragTestSite);
});

AfterSuite(pagesPage => {
    testSites.forEach((site) => {
        pagesPage.iDeleteASite(site);
    });
    pagesPage.iDeleteASite(dragTestSite);
});

Before((login, pagesPage) => {
    login('admin');
});

After(pagesPage => {
});

Scenario('Reorder page elements -- mouse move proof of concept @pagetest1', (I, recorder, welcomePage, pagesPage, pageEditor) => {

    I.say('Explorer test: re-order elements');

    // I.startRecording();
    welcomePage.iAmOnThePage();

    recorder.say('hey there, we are going to walk through a quick peregrine demo');

    welcomePage.navigateTo('sites and pages', pagesPage);

    testSites.forEach((site) => {
        pagesPage.iCreateANewSite(site);
    });
    pagesPage.iCreateANewSite(dragTestSite);

    pagesPage.reorderItems(dragTestSite,"test1");
}).tag("@pages").tag("@explorerTest1");;


Data(sites).Scenario('Page editor flow test', (I, current, recorder, welcomePage, pagesPage, pageEditor) => {
    I.say('Create Page test: ' + current.siteName);

    // I.startRecording();
    welcomePage.iAmOnThePage();

    recorder.say('hey there, we are going to walk through a quick peregrine demo');

    welcomePage.navigateTo('sites and pages', pagesPage);

    pagesPage.iCreateANewSite(current.siteName);

    pagesPage.iNavigateTo(current.siteName, 'Sample Sites');

    pagesPage.iEditPage('Sample Sites', "editor!");

    pageEditor.iAddComponent(current.siteName, 'Sample Sites', 'Accordion');

    pageEditor.iClickComponent("Peregrine Accordion");

    pageEditor.iEditActiveComponentTitle(testPageComponentTitle);
    pageEditor.iClickActiveComponentAccept();

    pageEditor.iSeeTextInEditor(testPageComponentTitle);

}).tag("@pages").tag("@pageTest1");


