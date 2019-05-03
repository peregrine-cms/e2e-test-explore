const I = actor();

module.exports = {


    iAmOnThePage() {
        I.amOnPage('/content/admin.html')
        this.validatePage();
    },

    validatePage() {
        I.wait(1);
        I.see('home');
    },

    navigateTo(linkText, target) {
        I.say("Navigating to " + linkText);
        I.say("requires testSupport branch");

        I.click(
        locate('a').withAttr({title: 'explore'})
            //.inside(locate('div').withAttr({'class': 'card blue-grey darken-3'}).withText(linkText))
            .inside(locate('div').withAttr({'data-test-container': 'cardAction'}).withText(linkText))
        );

        target.validatePage();
    }
}
