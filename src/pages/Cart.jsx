import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CART_DELETE } from "../redux/actionTypes";
import SCart from"../components/SCart";
const Cart = () => {
  const dispatch = useDispatch();

  const [cartArray, setCartArray] = useState([]);
  const cartData = useSelector((store) => store.productReducer.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      total += cartData[i].price * cartData[i].quantity;
    }
    if (total === 0) {
      setDeliveryCharge(0);
    }
    if (total > 0 && total < 3000) {
      setDeliveryCharge(80);
    } else if (total >= 3000) {
      setDeliveryCharge(0);
    }
    setTotalPrice(total);
    setCartArray(cartData);
  }, [cartData]);

  const deleteCart = (id) => {
    let update = [...cartArray];
    update = update.filter((item) => item.id !== id);
    dispatch({ type: CART_DELETE, payload: update });
  };

  const qtyIncreament = (id) => {
    let update = [...cartArray];
    update = update.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch({ type: CART_DELETE, payload: update });
  };
  const qtyDecreament = (id) => {
    let update = [...cartArray];
    update = update.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    dispatch({ type: CART_DELETE, payload: update });
  };

  return (
    <div className="flex justify-between gap-8 font-size-18">
      <div className="w-full flex flex-col gap-8 p-8">
        {cartArray?.map((item, i) => (
          <SCart
            key={i}
            i={i}
            {...item}
            deleteCart={deleteCart}
            qtyIncreament={qtyIncreament}
            qtyDecreament={qtyDecreament}
          />
        ))}
      </div>
      <div className="w-3/5 p-8">
        <div className="summary w-full mx-auto border-2 border-black rounded-lg bg-white p-8">
          <h1 className="text-3xl mb-8">Cart Summary</h1>
          <hr />
          <div className="flex justify-between p-4">
            <p>SubTotal :</p>
            <p>₹ {totalPrice}.00</p>
          </div>
          <hr />
          <div className="flex justify-between p-4">
            <p>Delivery :</p>
            {deliveryCharge > 0 && deliveryCharge < 3000 ? (
              <p>₹ {deliveryCharge}.00</p>
            ) : (
              <div>
                <s>₹ {deliveryCharge}.00</s>
                <p className="text-red-500">Free Delivery</p>
              </div>
            )}
          </div>
          <hr />
          <div className="flex justify-between p-4">
            <p>Grand Total :</p>
            <p>
              ₹ {totalPrice + deliveryCharge}.00{" "}
              <span className="text-green-500"> only</span>
            </p>
          </div>
          <hr />
          <button className="w-32 h-10 rounded-md bg-green-500 text-white">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export { Cart };
