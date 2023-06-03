"use client";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCartItems } from "@/utils/redux/features/cartSlice";
import Modal from "./components/Modal";
import { RootStateType } from "@/utils/redux/store";

export default function Index() {
  const { cartItems, isloading } = useSelector(
    (state: RootStateType) => state.cart
  );
  const { isOpen } = useSelector((state: RootStateType) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  if (isloading) {
    return <div className="loading">is loading...</div>;
  }
  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}
