// src/mocks/node.js
import { setupServer } from "msw/node";
import { handlers } from "./2.handlers";

export const server = setupServer(...handlers);
