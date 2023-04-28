// To prevent data from being shared across users and requests, while still ensuring that the QueryClient is only created once per request, we can create a request-scoped singleton instance of the QueryClient.

// This will make prefetched queries available to all components further down the component tree, and allow us to fetch data within multiple Server Components and use <Hydrate> in multiple places.

import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
