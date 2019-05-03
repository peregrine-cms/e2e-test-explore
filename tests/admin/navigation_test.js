
Feature('Navigation');

Before((login, pagesPage) => {
    login('admin');
});

After(pagesPage => {

});


Scenario('Navigation page test', (I, recorder, welcomePage, assetsPage, homePage, objectsPage, templatesPage, pagesPage) => {

    I.say('Proof-of-concept test: CodeceptJS vs PeregrineCMS');
    I.showConsoleLog();

    // I.startRecording();
    welcomePage.iAmOnThePage();

    // pause();
    I.say('Testing main navigation');

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo('Assets', assetsPage);

    assetsPage.iNavigateHome();

    homePage.iAmOnThePage();

    homePage.navigateTo('Objects', objectsPage);

    objectsPage.iNavigateHome();

    homePage.iAmOnThePage();

    homePage.navigateTo("Templates", templatesPage);

    templatesPage.iNavigateHome();

    homePage.iAmOnThePage();

    homePage.navigateTo("Sites", pagesPage);

    pagesPage.iNavigateHome();

    homePage.iAmOnThePage();

});
