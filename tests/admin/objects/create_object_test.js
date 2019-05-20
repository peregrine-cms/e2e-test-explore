
Feature('Create Objects');

let testObjects = [
    ['test1', 'tag'],
    ['test2', 'allfields'],
    ['test3', 'collection'],
    ['test4', 'datetest'],
    ['test5', 'sample']
];

let objects = new DataTable(['objectName', 'objectType']);

testObjects.forEach((objectParams) => {
    objects.add(objectParams);
});


Before((login, objectsPage) => {
    login('admin');
});

BeforeSuite(objectsPage => {
    testObjects.forEach((testObject) => {
        objectsPage.iDeleteAnObject(testObject[0]);
    });
});

AfterSuite(objectsPage => {
    testObjects.forEach((testObject) => {
        objectsPage.iDeleteAnObject(testObject[0]);
    });
});

Data(objects).Scenario('Create object types', (I, current, recorder, welcomePage, homePage, objectsPage) => {

    I.say('Add object test. Object of type: ' + current.objectType);

    // I.startRecording();
    welcomePage.iAmOnThePage();

    welcomePage.navigateTo('administration', homePage);

    homePage.navigateTo('objects', objectsPage);

    objectsPage.iCreateANewObject(current.objectName, current.objectType);

    I.see(current.objectName);

}).tag("@objects").tag("@objectTest1");


Scenario('t2', (I) => {
    I.say("here");

}).tag("@objects").tag("@objectTest2");
