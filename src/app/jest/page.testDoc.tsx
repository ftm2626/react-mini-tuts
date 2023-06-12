import Index from "./page";
import { render, screen } from "@testing-library/react";


test("render the page", () => {
  render(<Index />);
  const text = screen.getByTestId("1");
  expect(text).toBeInTheDocument();
});

// describe(name: name of the group test,fn)


// test(name,fn,timeout:default is 5s)
// test.only() => will only run this test in the file
// test.skip() => will skip this test

// it() = test()
// fit() = test.only()
// xit() = test.skip()


// naming your  test file
// page.test.tsx
// page.spec.tsx
// __test__ folder


// coverage threshold => put in package.json
// "jest" : {"coverageThreshold" : { "global" : { "branches": 80, "functions": 80, "lines": 80, "statements": -10 } } }
// test will fail if there's less than 80% branch, function and line coverage, or more than 10 statments have failed 
// you can exculde files from coverage in package.json


// what to test - basic
// test component renders
// test component renders with props
// test component renders in diffrent states
// test component renders to events

// what not to test
// implementation details
// third party code
// code that is not important from a user point of view


// RTL queries
// to find single elements : getBy..., queryBy..., findBy...
// to find multiple elements : getAllBy..., queryAllBy..., findAllBy...

// getByRole 
// https://www.w3.org/TR/html-aria/#docconformance 
// html elements and roles



 