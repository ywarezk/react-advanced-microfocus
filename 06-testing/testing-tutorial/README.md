# Testing

In this lesson we will learn how to test your react components

## different types of tests

- unit testing
- e2e testing

## libraries to help us with unit testing

### Test runner

whomever will run our test

- jest
- mocha
- jasmine

these help us write the test and run the test

### Assertion library

```
expect(...).toBe(...)
```

- chai
- jest

### sometimes we want to run the tests in the browser

- karma

### we can run the test

- browser
- node

### To run the tests on node like the browser

If we choose to run the tests in node
We have to mimic the browser environment

- jsdom

## advantages / disadvatages run in browser/node

- browser: "hey i can see the component in a screen, use the chrome debug tools, i can check the component as standalone"
- node: "I'm quicker - i can run the tests in parallel"
- node: "easier on CI"

## Mocking

- sinon
- jest

## Testing libraries

- @testing-library/react
- enzyme

## Lesson Plan

- Running the tests
- Running the tests with breakpoint
- jest
- Test that a component contains something
- Test Event
- Test form submit
- mocking server
