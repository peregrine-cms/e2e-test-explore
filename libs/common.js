
const I = actor();

module.exports = {

    clickDatePopup(dayNum) {
        I.click(locate('input').withAttr({ class: 'vdatetime-input' }).withAttr({placeholder: 'Select date'}));
        I.click(locate('div').withAttr({class: "vdatetime-calendar__month__day"}).withText(dayNum));
        I.click(locate('div').withAttr({class: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm"}));
    },

    clickTimePopup(hour, minute) {
        I.click(locate('input').withAttr({ class: 'vdatetime-input' }).withAttr({placeholder: 'Select time'}));
        I.click(locate('div').withAttr({class: "vdatetime-time-picker__item"}).withText(hour)
            .inside(locate('div').withAttr({class: "vdatetime-time-picker__list vdatetime-time-picker__list--hours"})));
        I.click(locate('div').withAttr({class: "vdatetime-time-picker__item"}).withText(minute)
            .inside(locate('div').withAttr({class: "vdatetime-time-picker__list vdatetime-time-picker__list--minutes"})));
        I.click(locate('div').withAttr({class: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm"}));
    },

    clickDateTimePopup(dayNum, hour, minute) {
        I.click(locate('input').withAttr({ class: 'vdatetime-input' }).withAttr({placeholder: 'Select datetime'}));
        I.click(locate('div').withAttr({class: "vdatetime-calendar__month__day"}).withText(dayNum));
        I.click(locate('div').withAttr({class: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm"}));

        I.click(locate('div').withAttr({class: "vdatetime-time-picker__item"}).withText(hour)
            .inside(locate('div').withAttr({class: "vdatetime-time-picker__list vdatetime-time-picker__list--hours"})));
        I.click(locate('div').withAttr({class: "vdatetime-time-picker__item"}).withText(minute)
            .inside(locate('div').withAttr({class: "vdatetime-time-picker__list vdatetime-time-picker__list--minutes"})));
        I.click(locate('div').withAttr({class: "vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm"}));
    },

    returnToHomeMenu() {
        I.say("Returning to main menu");

        I.click("//*[@title=\'home\']");
    }
}
