import React, { useEffect, useState } from 'react'
import { SaleCard } from './DashCategories'
import ben from '@/public/dashboard/ben.svg'
import medium from '@/public/dashboard/medium art.svg'

const Cart = () => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cart') || '[]'))
    }, [])

    const removeFromCart = (id: number) => {
      // Check if localStorage is available before using it
      if (typeof window !== "undefined") {
  
        const Cart = localStorage.getItem("cart") || ("" as unknown as string);
  
        // Clone the existing cartItem array
        const newCartItem = [...JSON.parse(Cart)];
  
        console.log({newCartItem})
  
        // Remove the selected item from the cloned array
        newCartItem.splice(id, 1);
  
        // Update the 'cart' key in local storage with the new array
        localStorage.setItem("cart", JSON.stringify(newCartItem));
  
        // // Optionally, you might want to update the state to reflect the change in the UI
        // setCartItem(newCartItem);
      }
      window.location.reload()
    };

  return (
    <div className='flex'>
     {cartItems?.map((elem:any, id:number) => (
          <SaleCard key={id} src={elem.image ||medium} category={elem.category} id={elem.id} caption={elem.name} price={elem.price} artist="ben" profile={elem.artist?.profileUrl || ben} location={'lagos'} onClick={() => removeFromCart(id)} />
     ))}
    </div>
  )
}

export default Cart