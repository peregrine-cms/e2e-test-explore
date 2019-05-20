
Feature('Create Assets');

let uploadAssets = new DataTable(['filename', 'verifyText']);

let testUploadAssets = [
    ['test.txt', '1234'],
    ['test2.txt', 'Hello, world!'],
    ['test3.txt', '你好，世界']
];

testUploadAssets.forEach((uploadAssetParams) => {
    uploadAssets.add(uploadAssetParams);
});

BeforeSuite((assetsPage) => {
    testUploadAssets.forEach((testObject) => {
        assetsPage.iDeleteAnAsset(testObject[0]);
    });
});

AfterSuite(assetsPage => {
    testUploadAssets.forEach((testObject) => {
        assetsPage.iDeleteAnAsset(testObject[0]);
    });
});

Before((login, assetsPage) => {
    login('admin');
});


Data(uploadAssets).Scenario('Upload assets', (I, current, recorder, welcomePage, homePage, assetsPage) => {

    I.say('Testing upload of asset: ' + current.filename);

    // I.startRecording();
    welcomePage.iAmOnThePage();

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo('Assets', assetsPage);

    assetsPage.iUploadAnAsset("resources/" + current.filename);

    I.wait(1);

    I.see(current.filename);

    assetsPage.iValidateAssetText(current.filename, current.verifyText);


}).tag("@assets").tag("@assetTest1");
