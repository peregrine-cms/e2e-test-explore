

class EventHelper extends Helper {

  // before/after hooks
  _before() {
  }

  _after() {
  }

  setupPageEventListener(eventName) {
    let puppeteer = this.helpers['Puppeteer'];

    return new Promise( function(resolve) {
      puppeteer.page.evaluate(function() {
        document.addEventListener(eventName, function() {
          resolve();
        });
      });

    });
  }

  async listenFor(type) {
    let puppeteer = this.helpers['Puppeteer'];
    return puppeteer.page.evaluate(type => {
      document.addEventListener(type, e => {
        //resolve();
        window.onCustomEvent({type, detail: e.detail});
      });
    }, type);
  }

  async awaitPageLoadedEvent(eventName) {
    let puppeteer = this.helpers['Puppeteer'];
    await puppeteer.page.exposeFunction('onCustomEvent', e => {
      console.log(`${e.type} fired`, e.detail || '');
    });

    await this.listenFor(eventName);

  }

  // Will turn on an eventListener that will echo browser console messages to the codeceptjs output
  showConsoleLog() {
    this.helpers['Puppeteer'].page.on('console', msg => console.log('Browser console::', msg.text()));
  }
}

module.exports = EventHelper;
