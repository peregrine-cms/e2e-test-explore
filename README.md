## Peregrine CMS automated testing

End-to-end tests for Peregrine CMS.

#### Getting Started

Clone the test framework from here:
https://github.com/peregrine-cms/e2e-test-explore.git
Currently the develop branch is the only branch with any code.

After checking out the develop branch, run:
```
npm install
```
to install everything you need to run tests.

Next, check that the test runner script runs is runnable:
```
./scripts/percli-testrun --help
```
(I had to chmod+x to make this script executable, not sure windows equivalent)

From there, if Peregrine CMS is running, you can use the test runner script to start running tests:

```
./scripts/percli-testrun -t navigation
```
or

```
./scripts/percli-testrun -t navigation -s 
```

to run with a broswer

#### Command Line Arguments

| Parameter                    | Description                                                             |
|------------------------------|-------------------------------------------------------------------------|
| -d, --dockerinstance \[tag\] | run tests against peregrine docker container. (default:   develop)      |
| -f, --feature \[features\]   | run test for specific feature or features (comma-sepatated)             |
| -i, --interactiveshell       | run codeceptjs in shell mode                                            |
| -l, --loglevel \[loglevel\]  | specify output level: none, steps, debug, or verbose (default:   steps) |
| -p, --pattern \[pattern\]    | run tests that match pattern                                            |
| -r, --reporting              | include allure reporting output                                         |
| -s, --showbrowser            | run tests with browser                                                  |
| -t, --tag \[tags\]           | run tests that match a specific tag or tags (comma-sepatated)           |

**Note for Windows users:**

Windows-Build-Tools is required to build this project. Run the following command in an administrative shell:
```
npm install --global windows-build-tools
```