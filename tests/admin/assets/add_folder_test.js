
Feature('Create Folder');

const { I, recorder, welcomePage, homePage, assetsPage } = inject();
const testFolderName = 'Test Folder';

Before((login, assetsPage) => {
    login('admin');
});

After(assetsPage => {
    assetsPage.iDeleteAnAsset(testFolderName);
});


Scenario('Create folder', () => {

    I.say('Testing creation of an asset folder');

    welcomePage.iAmOnThePage();

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo('Assets', assetsPage);

    assetsPage.iCreateANewFolder(testFolderName);

    I.see(testFolderName);

}).tag("@assets").tag("@createAssetFolderTest");