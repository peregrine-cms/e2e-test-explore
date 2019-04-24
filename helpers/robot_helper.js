
const robot = require('robotjs');

class RobotHelper extends Helper {

  // before/after hooks
  _before() {

  }

  _after() {
    // remove if not used
  }

  robotDragAndDrop(startCoordinates, endCoordinates) {
    robot.setMouseDelay(200);
    robot.moveMouse(startCoordinates.x,startCoordinates.y);
    robot.mouseToggle('down');
    robot.moveMouseSmooth(endCoordinates.x,endCoordinates.y);
    robot.mouseToggle('up');
    robot.setMouseDelay(10);
  }

  async robotDragAndDropElements(startElementLocator, endElementLocator) {
    var browserCoordinates = await this._getBroswerCoordintes();

    // assuming locator is type xpath
    const startElement = await this.helpers['Puppeteer'].page.$x(startElementLocator.value);
    const endElement = await this.helpers['Puppeteer'].page.$x(endElementLocator.value);

    const bb1 = await startElement[0].boundingBox();
    const bb2 = await endElement[0].boundingBox();

    this.robotDragAndDrop(
      {x: bb1.x + browserCoordinates.xOffset + 10,
        y: bb1.y + browserCoordinates.yOffset + browserCoordinates.viewportVerticalOffset + 10},
      {x: bb2.x + browserCoordinates.xOffset + 10,
        y: bb2.y + browserCoordinates.yOffset + browserCoordinates.viewportVerticalOffset + 10}
    );
  }

  async _getBroswerCoordintes() {
    // we don't have access to the browser window object within our helper, so in
    // order to get that we'll need to create a function that returns it, then pass that to
    // this.helpers['Puppeteer'].page.evaluate, which as its name suggests will evaluate
    // the arguments in the context of the page object.
    var getBrowserCoordinates = function(){
      return {
        xOffset: window.screenX,
        yOffset: window.screenY,
        viewportVerticalOffset: ((window.outerHeight - window.innerHeight) - window.screenY),
        viewportHorizontalOffset: ((window.outerWidth - window.innerWidth) - window.screenX)
      };
    }
    return await this.helpers['Puppeteer'].page.evaluate(getBrowserCoordinates);
  }
}

module.exports = RobotHelper;
