
Feature('Move Asset');

const { I, recorder, welcomePage, homePage, assetsPage } = inject();

const assetName = 'test4.jpg';
const testFolder1Name = 'testfolder1';
const testFolder2Name = 'testfolder2';

Before((login, assetsPage) => {
    login('admin');
});

After(assetsPage => {
    assetsPage.iDeleteAnAsset(testFolder1Name);
});


Scenario('Move assets', () => {
    I.say('Testing moving assets');

    // I.startRecording();
    welcomePage.iAmOnThePage();

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo('Assets', assetsPage);

    assetsPage.iCreateANewFolder(testFolder1Name);

    I.see(testFolder1Name);

    assetsPage.iNavigateTo(testFolder1Name, "This folder is empty, use the navigation bar to add an asset or drag and drop an asset from the file system onto the browser.");

    assetsPage.iCreateANewFolder(testFolder2Name);

    I.see(testFolder2Name);

    assetsPage.iNavigateUpALevel();

    assetsPage.iUploadAnAsset("resources/" + assetName);

    I.wait(1);

    I.see(assetName);

    assetsPage.iMoveAnAsset(assetName, testFolder1Name + "/" + testFolder2Name);

    assetsPage.iNavigateTo(testFolder1Name, testFolder2Name);

    assetsPage.iNavigateTo(testFolder2Name, assetName);

}).tag("@assets").tag("@moveAssetTest");