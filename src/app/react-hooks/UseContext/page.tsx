"use client";
import React, { useContext } from "react";
import { UserContext, UserProvider } from "./UserContext";

function UserDetails() {
    const { user } = useContext(UserContext);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function ChangeData() {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <button onClick={()=>setUser({name:'fatemeh',email:'email.com'})}>change name</button>
    </div>
  );
}

export default function Index() {
  return (
    <UserProvider>
      <UserDetails />
      <ChangeData />
    </UserProvider>
  );
}
