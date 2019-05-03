
Feature('quickdebug');

Before((login, pagesPage) => {
    login('admin'); 
    pagesPage.iDeleteASite('ruben');
 });

After(pagesPage => {
    pagesPage.iDeleteASite('ruben');
});

Scenario('quick entry to debugging', (I, recorder) => {

    // welcomePage.iAmOnThePage();
    // I.startRecording();
    pause();
    // I.stopRecording();
 //   pause()
});
