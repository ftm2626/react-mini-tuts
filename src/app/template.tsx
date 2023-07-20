"use client";
// import Providers from "@/utils/reactQuery/Provider";
import "./globals.css";
import { store } from "@/utils/redux/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productApi } from "@/utils/redux/features/apiSlice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <body>
      <Provider store={store}>
        <ApiProvider api={productApi}>
          <QueryClientProvider client={queryClient}>
            {/* this is the old way of setting up react-query in next, but for next
            13 we need a custome provider */}
            {/* <Providers> */}
            {children}
            {/* </Providers> */}
          </QueryClientProvider>
        </ApiProvider>
      </Provider>
    </body>
  );
}
