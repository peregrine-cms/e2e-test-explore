
Feature('Create site');

const { I, recorder, welcomePage, pagesPage, pageEditor } = inject();
const testPageComponentTitle = "New title from editor";

const dragTestSiteTitle = "Drag Site";
const dragTestSite = "test_x";
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
        pagesPage.iDeleteAPackageGroup(site);
    });
    pagesPage.iDeleteASite(dragTestSite);
    pagesPage.iDeleteAPackageGroup(dragTestSite);
});

Before((login, pagesPage) => {
    login('admin');
});

After(pagesPage => {
    testSites.forEach((site) => {
        pagesPage.iDeleteASite(site);
        pagesPage.iDeleteAPackageGroup(site);
    });
});

Scenario('Reorder page elements -- mouse move proof of concept @pagetest1', () => {

    I.say('Explorer test: re-order elements');

    // I.startRecording();
    welcomePage.iAmOnThePage();

    recorder.say('hey there, we are going to walk through a quick peregrine demo');

    welcomePage.navigateTo('sites and pages', pagesPage);

    testSites.forEach((site) => {
        pagesPage.iCreateANewSite(site);
    });
    pagesPage.iCreateANewSite(dragTestSiteTitle, dragTestSite);

    pagesPage.reorderItems(dragTestSiteTitle,testSites[0]);
}).tag("@pages").tag("@explorerTest1");


Data(sites).Scenario('Page editor flow test', (current) => {
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


