// we use a smaller config file to set up the real config file for codecept.js

exports.siteIncludes = {
    loginPage: './pages/Login.js',
    homePage: './pages/Home.js',
    welcomePage: './pages/Welcome.js',
    pagesPage: './pages/Pages.js',
    assetsPage: './pages/Assets.js',
    objectsPage: './pages/Objects.js',
    templatesPage: './pages/Templates.js',
    recorder: './libs/recorder.js',
    pageEditor: './pages/PageEditor.js',
    templateEditor: './pages/TemplateEditor.js',
    homeButton: './fragments/homeButton.js',
    timePopups: './fragments/timePopups.js',
    I: './libs/steps_file.js'
}
