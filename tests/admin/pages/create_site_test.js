
Feature('Create site');

Before((login, pagesPage) => {
    login('admin');
    pagesPage.iDeleteASite('test1');
});

After(pagesPage => {

    pagesPage.iDeleteASite('test1');

});


Scenario('Reorder page elements -- mouse move proof of concept', (I, recorder, welcomePage, pagesPage, pageEditor) => {

    I.say('Proof-of-concept test: CodeceptJS vs PeregrineCMS');

    // I.startRecording();
    welcomePage.iAmOnThePage();

    recorder.say('hey there, we are going to walk through a quick peregrine demo');

    welcomePage.navigateTo('sites and pages', pagesPage);

    pagesPage.reorderItems("greble","site-2");
});


Scenario('Page editor flow test', (I, recorder, welcomePage, pagesPage, pageEditor) => {

    I.say('Proof-of-concept test: CodeceptJS vs PeregrineCMS');

    // I.startRecording();
    welcomePage.iAmOnThePage();


    recorder.say('hey there, we are going to walk through a quick peregrine demo');

    welcomePage.navigateTo('sites and pages', pagesPage);


    pagesPage.iCreateANewSite('test1');


    pagesPage.iNavigateTo('test1', 'Sample Sites');

    pagesPage.iEditPage('Sample Sites', "editor!");


    // pause();

    pageEditor.iAddComponentAt('Accordion', '/jcr:content');


    // editPage.iAddComponentAt('Article Text Block', '/jcr:content');
    // editPage.iFillComponentFields({

    // });
    // editPage.iSaveComponentEdit();
    // I.stopRecording();
   //   pause()
});


