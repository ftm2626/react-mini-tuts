import { AppProvider } from "./components/6.AppProvider";
import Index from "./page";
import { render, screen } from "./test-utils";

test("render the page", () => {
  render(<Index />);
  const text = screen.getByTestId("1");
  expect(text).toBeInTheDocument();
});


// findBy and findAllBy
// returns a promise whitch resolves when an element is found which matches the given query
// the promise is rejected if no element is found or if more than one element is found after a default timeour of 1000ms
// findAllBy
// returns a promise which resolves to an array of elements when any elements are found which match the given query
// the promise is rejected if no elements are found after a default timeout of 1000 ms

// debugging
// screen.debug
// logRoles()

// user-event

// convineince Apis
// click()
// dblClick()
// tripleClick()
// hover()
// unhover()
// tab

// pointer Apis
// pointer({keys:'[MouseLeft]'}) -> simulates a left click
// pointer({keys:'[MouseLeft][MouseRight]'}) -> simulates a left click followed by a right click
// pointer('[MouseLeft][MouseRight]') -> pass in the string if 'keys' is the only argument
// pointer('[MouseLeft>]') -> press a button without releasing it
// pointer('[/MouseLeft]') -> just releasing a priviously pressed button

// utility Apis
// clear()
// selectOptions()
// deselectOptions()
// upload()

// clipboard Apis
// copy()
// cut()
// paste()

// keyboard Api
// keyboard('foo') -> translates to f,o,o
// keyboard('{Shift>}A{/Shift}') -> shift down , A, Shift up

// Providers
// use it as a wrapper in the render
// test("render the page", () => {
//   render(<Index />, {
//     wrapper: AppProvider,
//   });
// });

// OR use test-utils.tsx file


// 27
