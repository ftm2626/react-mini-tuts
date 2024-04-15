import { HttpResponse, http } from "msw";
import { render, screen } from "../test-utils";
import { server } from "./8.mocks/1.server";
import { Users } from "./8.user";

describe("users", () => {
  test("render correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

//   test("renders a list of users",async ()=>{
//     render(<Users />);
//     const users = await screen.findAllByRole("listitem")
//     expect(users).toHaveLength(3)
//   })

// test("render error" ,()=>{
//     server.use(http.get("https://jsonplaceholder.typicode.com/users",()=>{
//         return HttpResponse.error()
//     }));
// })

// this needs more setting for moking. just read the msw docs.

});
