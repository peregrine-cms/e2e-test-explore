const ptest = require('./conf/ptest.conf.js').config;
const siteIncludes = require('./conf/site.conf.js').siteIncludes;

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: ptest.url,
      show: ptest.show,
      slowMo: 10,
      waitForAction: 1000,
      waitForNavigation: 'networkidle2',
      chrome: {
        // args: ['--start-fullscreen'],
        defaultViewport: {
          width: 1100,
          height: 600
        }
      }
    },
    REST: {
      endpoint: 'http://admin:admin@localhost:8080'
    },
    CmdHelper: {
      require: './node_modules/codeceptjs-cmdhelper',
      options: {
        showOutput: true
      }
    },
    RobotHelper: {
        require: './helpers/robot_helper.js',
    },
    EventHelper: {
        require: './helpers/event_helper.js',
    }
  },
  include: siteIncludes,
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
   },
   autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: 'login',
      users: {
        admin: {
          login: (I) => {
              I.say('>> boilerplate: login');
              I.amOnPage('/system/sling/form/login');
              I.fillField('j_username', 'admin');
              I.fillField('j_password', 'admin');
              I.click('Login');
              I.see('welcome');
              I.say('>> /boilerplate');
          },
          check: (I) => {
              I.say('>> boilerplate: check if logged in');
              I.amOnPage('/perapi/admin/access.json');
              I.see('"admin"');
              I.say('>> /boilerplate');
            }
        }
      }
    }
  },
  // This path matches all of out tests -- use test runner to constrain via tag
  tests: '{./tests/(!experiments)/*test.js,./tests/admin/**/*test*.js}',
  name: 'peregrine-test'
}
