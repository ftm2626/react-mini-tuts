"use client";
import {
  useAddProductsMutation,
  useGetAllProductsQuery,
  useLazyGetProductQuery,
} from "@/utils/redux/features/apiSlice";
import React from "react";

export default function Index() {
  const { data, isLoading } = useGetAllProductsQuery("");
  const [getProduct, results] = useLazyGetProductQuery();
  const [addPost, addPostRes] = useAddProductsMutation();
  

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <p>all products : </p>
      <div>
        {data?.products?.map((item) => (
          <span key={item.id}>{item.title} , </span>
        ))}
      </div>
      <hr />
      <button onClick={() => getProduct("iphone")}>Get iphones</button>
      {results.isLoading && <div>isloading...</div>}
      {results.isSuccess && (
        <div>
          {results?.data?.products.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      )}
      <hr />
      <button
        onClick={() => {
          addPost({id:101,title:'something'});
        }}
      >
        Add
      </button>
      {addPostRes.isLoading && 'is loading...'}
      {addPostRes.isSuccess && 'post added'}
    </div>
  );
}
