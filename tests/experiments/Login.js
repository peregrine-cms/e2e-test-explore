
Feature('Login');

Before(login => {
    login('admin');
 });

Scenario('log in and go to the defaut homepage', (welcomePage) => {

    welcomePage.iAmOnThePage();

}).tag('@login');
