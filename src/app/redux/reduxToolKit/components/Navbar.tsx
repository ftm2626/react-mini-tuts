"use client";
import { RootStateType } from "@/utils/redux/store";
import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const { amount } = useSelector((store: RootStateType) => store?.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          {/* <CartIcon /> */}
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
