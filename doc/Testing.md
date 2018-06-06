# Testing 

## Three major areas to discuss

1. 6 Key Testing Decisions
1. Configure testing and write test
1. Continuous integration services

## JavaScript Teesting Styles

Style | Focus
----- | -----
Unit | Single function or module
Integration | Interactions btwn modules
UI | Automate interactions w/ UI
Smoke | Testing a production system to make sure everything's running as expected

## Unit Testing Decisions

1. Framework
1. Assertion Library
1. Helper Libraries
1. Where to run tests
1. Where to place tests
1. When to run tests

## Decision 1. Framework

Lots of testing frameworks available. Top six:

1. Mocha. more configurable
1. Jasmine. Includes an assertion library
1. Tape. simple
1. QUnit. oldest
1. Ava. new framework, interesting new features
1. Jest. Facebook's. Good for react devs. only runs effected tests based on changes. Some cool stuff.

It's like choosing a gym. Sure some are nicer, but you can greatly improve your health at ANY gym. Just START EXERCISING (TESTING)

No right answer, really. Just use one. Just don't code and pray. Just get into it.

### Going to use Mocha here

## Decision 2. Assertion Library

What's an assertion? A way to declare what you expect.

```javascript
expect(2+2).to.equal(4)

assert(2+2).equals(4)
```

Most popular is CHAI. Also assertJS, others.

### Going to use Chai here

## Decision 3. Helper Libraries

### JSDOM

1. Simulate browser's DOM
1. Run DOM-related tests without a browser
1. Useful when you want to run tests in the browser.

### Cheerio

1. jQuery for the server
1. Query virtual DOM using jQuery selectors

## Decision 4. Where to run tests

Three popular approaches to determining WHERE we run our tests

1. Browers?
- Karma
- Testem
1. Headless Browser
- PhantomJS. you don't see the browser running, it just runs one in mem
1. In-memory DOM
- JSDOM. simulates a DOM in memory

## Decision 5. Where to place tests

There are two popular schools of thought on where to put all your tests.

### Where do test files belong

Centralized | Alongside
----------- | ---------
Less "noise" in src folder | Easy imports
Deployment confusion | Clear visibility for the test (it's right there)
Inertia | Convenient to open both at same time
. | No recreating folder structure
. | Easier to move files

## Decision 6. When to run tests

### Unit Tests Should Run When You Hit Save

1. Rapid feedback loop!
1. Facilitates TDD
1. Automatic = low friction
1. Increases test visibility

Yes, they may seem slow. Umm, no. UNIT tests should run fast. Integration tests might take longer, those should probably only run on commits, manually. Not unit tests.

Unit Tests | Integration Tests
---------- | -----------------
Test a small unit | Test multiple units
Often single function | Often involves clicking and waiting
Fast | Slow(er)
Run upon save | Often run on demand, in QA, etc.

### Here's the plan

1. Framework - MOCHA
1. Assertion Library - CHAI
1. Helper Libraries - JSDOM
1. Where to run tests - NODE
1. Where to place tests - ALONGSIDE
1. When to run tests - UPON SAVE