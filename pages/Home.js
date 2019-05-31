const { I } = inject();

module.exports = {
    iAmOnThePage() {
        I.amOnPage('/content/admin.html');

        this.validatePage();
    },

    validatePage() {
        I.see('home');
    },

    navigateTo(linkText, target) {
        I.say("Navigating to " + linkText);
        // NOTE! If your tests are breaking here it's because you're not on the testsupport branch

        I.click(
        locate('a').withAttr({title: 'explore'})
            .inside(locate('div').withAttr({'class': 'card blue-grey darken-3'}).withText(linkText)).as('"' + linkText + '" link')
            //.inside(locate('div').withAttr({'data-test-container': 'cardAction'}).withText(linkText)).as('"' + linkText + '" link')
        );

        target.validatePage();
    }
}
