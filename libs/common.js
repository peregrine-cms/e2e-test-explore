
const I = actor();

module.exports = {

  // TODO: should this be a fragment instead?
  returnToHomeMenu() {
    I.say("Returning to main menu");

    I.click("//*[@title=\'home\']");

  }
}
