import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/utils/redux/features/modalSlice";
import { RootStateType } from "@/utils/redux/store";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector(
    (store: RootStateType) => store?.cart
  );

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems?.map((item: any) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(toggleModal())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
