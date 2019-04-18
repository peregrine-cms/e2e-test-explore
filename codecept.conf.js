const ptest = require('./ptest.conf.js').config;

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
        args: ['--start-fullscreen'],
        defaultViewport: {
          width: 1920,
          height: 1080
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
    }
  },
  include: {
    loginPage: './pages/Login.js',
    homePage: './pages/Home.js',
    welcomePage: './pages/Welcome.js',
    pagesPage: './pages/Pages.js',
    recorder: './libs/recorder.js',
    I: './libs/steps_file.js'
  },
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
              I.say('>> boylerplate: login');
              I.amOnPage('/system/sling/form/login');
              I.fillField('j_username', 'admin');
              I.fillField('j_password', 'admin');
              I.click('Login');
              I.see('Welcome');
              I.say('>> /boylerplate');
          },
          check: (I) => {
              I.say('>> boylerplate: check if logged in');
              I.amOnPage('/perapi/admin/access.json');
              I.see('"admin"');
              I.say('>> /boylerplate');
            }
        }
      }
    }
  },
  tests: './tests/*_test.js',
  name: 'peregrine-test'
}