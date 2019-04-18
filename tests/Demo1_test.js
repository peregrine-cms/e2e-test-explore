
Feature('Demo1');

Before((login, pagesPage) => {
    login('admin'); 
    pagesPage.iDeleteASite('ruben');
 });

After(pagesPage => {

    pagesPage.iDeleteASite('ruben');

});

Scenario('happy path to your own site', (I, recorder, welcomePage, pagesPage) => {

    // I.startRecording();
    welcomePage.iAmOnThePage();
    recorder.say('hey there, we are going to walk through a quick peregrine demo');
    welcomePage.navigateTo('sites and pages', pagesPage);
    pagesPage.iCreateANewSite('ruben');
    pagesPage.iNavigateTo('ruben', 'Sample Sites');
    // pagesPage.iEditPage('Samples Page', editPage);
    // editPage.iAddComponentAt('Article Header', '/jcr:content');
    // editPage.iAddComponentAt('Article Text Block', '/jcr:content');
    // editPage.iFillComponentFields({

    // });
    // editPage.iSaveComponentEdit();
    // I.stopRecording();
 //   pause()
});
