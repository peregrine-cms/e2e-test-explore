
Feature('Create site');

let testSites = ['test1', 'test-2', 'test 3'];
let sites = new DataTable(['siteName']);
testSites.forEach((site) => {
    sites.add([site]);
});


Before((login, pagesPage) => {
    login('admin');

    testSites.forEach((site) => {
        pagesPage.iDeleteASite(site);
    });
});

After(pagesPage => {
    testSites.forEach((site) => {
        pagesPage.iDeleteASite(site);
    });
});

Scenario('Reorder page elements -- mouse move proof of concept @pagetest1', (I, recorder, welcomePage, pagesPage, pageEditor) => {

    I.say('Proof-of-concept test: CodeceptJS vs PeregrineCMS');

    // I.startRecording();
    welcomePage.iAmOnThePage();

    recorder.say('hey there, we are going to walk through a quick peregrine demo');

    welcomePage.navigateTo('sites and pages', pagesPage);

    pagesPage.reorderItems("greble","site-2");
});


Data(sites).Scenario('Page editor flow test', (I, current, recorder, welcomePage, pagesPage, pageEditor) => {

    I.say('Proof-of-concept test: CodeceptJS vs PeregrineCMS');

    // I.startRecording();
    welcomePage.iAmOnThePage();


    recorder.say('hey there, we are going to walk through a quick peregrine demo');

    welcomePage.navigateTo('sites and pages', pagesPage);


    pagesPage.iCreateANewSite(current.siteName);


    pagesPage.iNavigateTo(current.siteName, 'Sample Sites');

    //pagesPage.iEditPage('Sample Sites', "editor!");


    // pause();

    //pageEditor.iAddComponentAt('Accordion', '/jcr:content');


    // editPage.iAddComponentAt('Article Text Block', '/jcr:content');
    // editPage.iFillComponentFields({

    // });
    // editPage.iSaveComponentEdit();
    // I.stopRecording();
   //   pause()
}).tag("@pages").tag("@pageTest1");


