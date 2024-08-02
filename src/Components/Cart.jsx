import { useDispatch, useSelector } from "react-redux"

import CartItem from "./CartItem"
import { clearCart } from "../utils/cartSlice";


function Cart() {

    const dispatch = useDispatch();


    function clearCartItems() {
        dispatch(clearCart());
    }


    const items = useSelector((store) => store.cart.items)
    // console.log(items)
  return (
    <div className="w-8/12 mx-auto">
          <h1 className="font-bold text-center m-3  text-2xl ">Cart</h1>
          <button className="btn btn-success "
          onClick={clearCartItems}
          >Clear Cart</button>
          <div >
          {
              items.map((item,index)=><CartItem key={index} detailedData={item} />)
          }
          </div>
    </div>
  )
}

export default Cart
