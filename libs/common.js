
const { I } = inject();

module.exports = {

    clickDatePopup(dayNum) {
        I.click(locate('input').withAttr({ class: 'vdatetime-input' }).withAttr({placeholder: 'Select date'}).as("open date popup"));
        I.click(locate('div').withAttr({class: "vdatetime-calendar__month__day"}).withText(dayNum).as("Day number " + dayNum));
        I.click(locate('div').withAttr({class: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm"}).as("Confirm"));
    },

    clickTimePopup(hour, minute) {
        I.click(locate('input').withAttr({ class: 'vdatetime-input' }).withAttr({placeholder: 'Select time'}).as("open time popup"));
        I.click(locate('div').withAttr({class: "vdatetime-time-picker__item"}).withText(hour)
            .inside(locate('div').withAttr({class: "vdatetime-time-picker__list vdatetime-time-picker__list--hours"})).as("select hour " + hour));
        I.click(locate('div').withAttr({class: "vdatetime-time-picker__item"}).withText(minute)
            .inside(locate('div').withAttr({class: "vdatetime-time-picker__list vdatetime-time-picker__list--minutes"})).as("select minute " + minute));
        I.click(locate('div').withAttr({class: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm"}).as("Confirm"));
    },

    clickDateTimePopup(dayNum, hour, minute) {
        I.click(locate('input').withAttr({ class: 'vdatetime-input' }).withAttr({placeholder: 'Select datetime'}).as("open date and time popup"));
        I.click(locate('div').withAttr({class: "vdatetime-calendar__month__day"}).withText(dayNum).as("Day number " + dayNum));
        I.click(locate('div').withAttr({class: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm"}).as("Confirm"));

        I.click(locate('div').withAttr({class: "vdatetime-time-picker__item"}).withText(hour)
            .inside(locate('div').withAttr({class: "vdatetime-time-picker__list vdatetime-time-picker__list--hours"})).as("select hour " + hour));
        I.click(locate('div').withAttr({class: "vdatetime-time-picker__item"}).withText(minute)
            .inside(locate('div').withAttr({class: "vdatetime-time-picker__list vdatetime-time-picker__list--minutes"})).as("select minute " + minute));
        I.click(locate('div').withAttr({class: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm"}).as("Confirm"));
    },

    returnToHomeMenu() {
        I.say("Returning to main menu");

        I.click(locate('a').withAttr( { title: 'home'} ).as('home'));
    }
}
