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
        robot.moveMouse(startCoordinates.x, startCoordinates.y);
        robot.mouseToggle('down');
        robot.moveMouseSmooth(endCoordinates.x, endCoordinates.y);
        robot.mouseToggle('up');
        robot.setMouseDelay(10);
    }

    async robotDragAndDropElements(startElementLocator, endElementLocator) {
        // Right now this needs to have a type of xpath, which they should
        // if built with codeceptjs locator
        if(startElementLocator.type == "xpath") {
            this._robotDragAndDropElementsByXpath(startElementLocator.value, endElementLocator.value);
        }
    }

    async _robotDragAndDropElementsByXpath(startElementXpath, endElementXpath) {
        var browserCoordinates = await this._getBrowserCoordinates();
        let puppeteer = this.helpers['Puppeteer'];

        const startElement = await puppeteer.page.$x(startElementXpath);
        const endElement = await puppeteer.page.$x(endElementXpath);

        if((!startElement)||(!endElement)) {
            return;
        }
        let startElementBox = await this._getElementCoordinates(startElement[0]);
        let endElementBox = await this._getElementCoordinates(endElement[0]);

        let startCoordinates = {
            x: startElementBox.left + browserCoordinates.xOffset + browserCoordinates.viewportHorizontalOffset + 10,
            y: startElementBox.top + browserCoordinates.yOffset + browserCoordinates.viewportVerticalOffset + 10
        };
        let endCoordinates = {
            x: endElementBox.left + browserCoordinates.xOffset + browserCoordinates.viewportHorizontalOffset + 10,
            y: endElementBox.top + browserCoordinates.yOffset + browserCoordinates.viewportVerticalOffset + 10
        };

        this.robotDragAndDrop(startCoordinates, endCoordinates);
    }

    async _getBrowserCoordinates() {
        // we don't have access to the browser window object within our helper, so in
        // order to get that we'll need to create a function that returns it, then pass that to
        // this.helpers['Puppeteer'].page.evaluate, which as its name suggests will evaluate
        // the arguments in the context of the page object.
        var getBrowserCoordinates = function () {
            return {
                xOffset: window.screenX,
                yOffset: window.screenY,
                viewportVerticalOffset: ((window.outerHeight - window.innerHeight) - window.screenY),
                viewportHorizontalOffset: ((window.outerWidth - window.innerWidth) - window.screenX)
            };
        }
        return await this.helpers['Puppeteer'].page.evaluate(getBrowserCoordinates);
    }

    async _getElementCoordinates(element) {
        // see comment for _getBrowserCoordinates
        const coordinates = await this.helpers['Puppeteer'].page.evaluate((element) => {
            const {top, left, bottom, right} = element.getBoundingClientRect();
            return {top, left, bottom, right};
        }, element);
        return coordinates;
    }

}

module.exports = RobotHelper;
