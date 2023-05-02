"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { title } from "process";
import React from "react";

// main actions you can take with react query is UseQuery and UseMutation
// UesQuery is getting data from somewhere and UseMutaion is changing the data

const hardCodeData = [
  { id: 1, title: "post1" },
  { id: 2, title: "post2" },
  { id: 3, title: "post3" },
];

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(() => resolve, duration));
}

// sample URLs for queryKey
// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id]
// /posts?authorId=1 -> ["posts",{authorId:1}]
// /posts/2/comments -> ["posts",post.id,"comments"]

export default function Index() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"], // queryKey takes in a unique identifier for your query
    // queryFn: () => Promise.reject("Error Message") // this will return an error
    queryFn: (obj) =>
      wait(1000).then(() => {
        console.log(obj); //return pageParam, meta, queryKey
        return [...hardCodeData];
      }), //it always accepts a promise
    // staleTime: 1000 * 60 * 5, //it becomes stale after 5 mins
    // refetchInterval: 1000 * 60 * 10, // it refetches data every 10 mins
    // enabled: true, // if false it does not run the query. eg. data.id != null
    // retry: 3 //It retries 3 times before showing any error
    // initialData:[{id:0,text:'initial data'}], //initialData will be conciderd a valid data and make our query stale
    // placeholderData:[{id:0,text:'placeholder data'}], //placeholder data will replace the data in loading until it loads
  });

  const { mutate, mutateAsync } = useMutation({
    onMutate: (variables) => {
      return { hi: "bye" };
    }, //It is called before mutaionsFn. Used to to something before the mutation or set something in context
    mutationFn: (title: string) => {
      return wait(1000).then(() => 
        hardCodeData.push({ id: +Math.random(), title: title })
      );
    },
    onSuccess: (_, __, context) => {
      queryClient.invalidateQueries(["posts"]), // if we mutate the data it does NOT atomatically changes the UI, so we have to invalidate the query that gets the data.
        queryClient.invalidateQueries(["posts"], { exact: true }), // without exact = true all the querys starting with "posts" in the app will be invalidated but with exact = true , it will only invalidate the query "posts  "
        console.log(context); // it returns { hi: "bye" };
    },
    // onSuccess: (data, variables, context) => {},
    // onError: (error, variables, context) => {},
    // onSettled: (data, error, variables, context) => {}, // Its like .finally
  });

  // mutateAsync("new post").then() //Async version
  // mutate("post", { onError: () => {}, onSuccess: () => {} }); // We can also set functions in mutate function

  if (isLoading) return <h1>is loading...</h1>;
  if (isError) return <pre>{JSON.stringify(error)}</pre>;
  // console.log(data);

  return (
    <div>
      {data?.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}

      <button onClick={() => mutate("new post")}>Add</button>
      {/* <button onClick={() => mutateAsync("new post").then()}>Add</button> mutateAsync returns a promise which we can use for spicific cases */}
    </div>
  );
}
