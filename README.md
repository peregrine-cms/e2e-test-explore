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
