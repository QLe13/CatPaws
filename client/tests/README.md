# Testing
This service has automated unit tests for the utility functions.
>**DISCLAIMER**: The current testing method is not recommended. 
>It is not advised to mock the entire module just to mock the database requests.
>Finding a better way to mock the database requests would be highly advised, perhaps using a `firestore emulator` to mock this.

## Prerequisites
- [Jest](https://jestjs.io/)
- [Github Actions](https://github.com/en/actions)

## Creating a Test Suite
A test suite can be created by making a new file in the `tests` folder labeled `[filename].test.ts`.

### Mocking
To get mock responses from `firestore`, you need to create a jest mock of the module you are going to be testing in the suite and mock all of the exported functions you will be testing. Replace the return values of any variables that make a call to `firestore` with mocked values placed in the `testVariables.ts` file. Put any constants from the module used in the mocked functions before the `return` block.
```ts
jest.mock('../src/utils',() => {
    const curDate = new Date()
    const curDateYearly = new Date(curDate).setUTCFullYear(1970) // These are the constants needed in this module for the functions
    return{
        __esModule: true,
        getCurClasses: jest.fn(),
        getCurSemester: jest.fn(async () => {
            const seasons = seasonPayload // seasonPayload is a mock value in the testVariables file
            for (const { name, end } of seasons) {
                if (end > curDateYearly) return name + curDate.getUTCFullYear()
            }
            return 'fall' + curDate.getUTCFullYear()
        })
    }
})
```
### Writing Tests
All tests should start with a `describe` block defining the module you are testing.
```ts
describe("Testing Utils", ()=>{})
```
Inside this `describe` block, goes other describe blocks, defining the functions you will be testing.
```ts
describe("Testing Utilities", ()=>{
    describe("Testing getCurSemester", () => {})
    describe("Testing getNextSemester", () => {})
})
```
Within these go the `it` blocks that define the return values and hold the tests.
```ts
describe("Testing Utilities", ()=>{
    describe("Testing getCurSemester", () => {
        it("Should return current semester", async () => {
            const mockCurrentSemester = await getCurSemester()
            expect(mockCurrentSemester).toEqual('fall2023')
        })})
    describe("Testing getNextSemester", () => {
        it("Should return the next semester", async () => {
            const mockNextSemester = await getNextSemester()
            expect(mockNextSemester).toEqual('spring2023')
        })})
})
```
>These `it` blocks should make calls to the mocked functions defined above.

## Running the Tests
Run `npm test` in the root directory to run all of your test suites. You can add arguments to the command using `-- --` after the command and before the argument with a space in between both. These arguments and info can be found on [Jest](https://jestjs.io/docs/cli).

## Using Github Actions to Automate
This service uses [Github Actions](https://docs.github.com/en/actions) to automate its tests. To update the automated actions performed, update the `node.js.yml` in the `github\workflows` folder. The traits needed for testing purposes are as following:
- `on` which is used to decide what Github actions will trigger tests.
- `runs-on` which decides what operating systems to run the tests on.
- `node-version` which decides which versions of `nodejs` to run the tests on.
- `env` which decides the environment to run the tests on.
- `steps` which holds the differents steps to take when running the tests which include running the tests themselves.