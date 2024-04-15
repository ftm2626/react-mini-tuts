import { HttpResponse, http } from "msw";
export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", (info) => {
    return HttpResponse.json([{ name: "jasi" }, { name: "fatemeh" }]);
  }),
];
