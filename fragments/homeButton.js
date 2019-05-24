const { I } = inject();

module.exports = {


    returnToHomeMenu() {
        I.say("Returning to main menu");

        I.click(locate('a').withAttr( { title: 'home'} ).as('home'));
    }

}
