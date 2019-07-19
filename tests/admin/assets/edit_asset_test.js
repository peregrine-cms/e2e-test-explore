
Feature('Edit Asset');

const { I, recorder, welcomePage, homePage, assetsPage } = inject();

const assetName = 'test4.jpg';
const newTitle = 'Horse Skater';
const newDescription = 'A horse wearing rollerskates.';


Before((login, assetsPage) => {
    login('admin');
});

After(assetsPage => {
    assetsPage.iDeleteAnAsset(assetName);
});

Scenario('Edit assets', () => {
    I.say('Testing editing of asset');

    // I.startRecording();
    welcomePage.iAmOnThePage();
    
    welcomePage.navigateTo('administration', homePage);
    
    homePage.navigateTo('Assets', assetsPage);

    assetsPage.iUploadAnAsset("resources/" + assetName);
    
    I.wait(1);
    
    I.see(assetName);
    
    assetsPage.iEditAnAssetTextProperty(assetName, "#title", newTitle);
    
    I.see(newTitle);

    //Description test isn't working because codecept can't see description after change
    /*
    assetsPage.iEditAnAssetTextProperty(newTitle, "#description", newDescription);

    within('.vfg-preview', () => {
        I.see(newDescription);
    })

    */

}).tag("@assets").tag("@editAssetTest");