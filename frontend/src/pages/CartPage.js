import React, { useEffect, useState } from 'react'
import './css/CartPage.css'

export const CartPage = () => {
    const [cartItems,setCartItem] = useState(JSON.parse(window.localStorage.getItem("CartItem"))||[])
    const [itemTotal, setItemTotal] = useState(0);
    useEffect(()=>{
        window.localStorage.setItem("CartItem",JSON.stringify(cartItems));
        let total = 0;
        cartItems.forEach(item=>{
            total += item.price * item.count;
        })
        setItemTotal(total);
    },[cartItems])
    useEffect(()=>{
        window.localStorage.setItem("shoppingCount",cartItems.length);
    },[cartItems])
    const goBack = ()=>{
        window.history.back();
    }
    const handleIncrement = (e,id)=>{
        e.stopPropagation();
        const updatedArray = [...cartItems];
        updatedArray.forEach((item)=>{
            if (item.id === id){
                item.count+=1;
                setCartItem(updatedArray);
                return
            }
        })
    }
    const handleDecrement = (e,id,count)=>{
        e.stopPropagation();
        const updatedArray = [...cartItems];
        updatedArray.forEach((item)=>{
            if (item.id === id){
                item.count-=1;
                setCartItem(updatedArray);
            } if (count === 1){
                let finalArray = updatedArray.filter((item)=> item.id !== id);
                setCartItem(finalArray);
             }
        })
    }
  return (
    <div className='cart-container'>
        <button type="button" className="btn btn-primary" id="back-btn" onClick={goBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            <span className='ms-1'>Back</span>
        </button>
        {cartItems.length>0?
        (<h1 className='text-center' id="header">Ready to Checkout ?</h1>):(<></>)}
        <div id="cartTable" className='container text-center'>
            {cartItems.length>0?
            (<>
            <div className='row text-center mb-1 header-row'>
                <div className='col fw-bold pt-2'>Serial</div>
                <div className='col-3 fw-bold pt-2'>Item</div>
                <div className='col fw-bold pt-2'>ItemPrice</div>
                <div className='col fw-bold pt-2'>Units</div>
            </div>
            {cartItems.map((item,index)=>{
                 return <div className='row text-center mb-1 result-row' key={index+1}>
                 <div className='col pt-2'>{index+1}</div>
                 <div className='col-3 d-flex justify-content-between pt-2'>
                     <img className="item-image" src={item.itemImage} alt={`item-${index+1}`}/>
                     <div className='item-text'>{item.itemName}</div>
                 </div>
                 <div className='col pt-2 item-price'>$ {item.price}</div>
                 <div className='col pt-2'>
                     <div className='d-flex justify-content-center updateunits-section'>
                         <button type='button' className='btn btn-danger decrement-btn' onClick={(e)=>handleDecrement(e,item.id,item.count)}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                 <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                             </svg>
                         </button>
                         <div className="counter-span">{item.count}</div>
                         <button type='button' className='btn btn-success increment-btn' onClick={(e)=>handleIncrement(e,item.id)}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                             </svg>
                         </button>
                     </div>
                 </div>
             </div>
            })}
            <div id="total-price">
                <div className="d-flex mb-3">
                    <div className='fw-bold me-2 big-text'>Total Price:</div>
                    <div className='fw-bold big-text'>$ {Math.round(itemTotal)} </div>
                </div>
                <button type='button' className='btn btn-outline-primary'>Place Order</button>
            </div>
            </>
            ):(<>
            <div id="instruction-banner">
                <div className="p-4 shadow-4 rounded-3">
                    <h2>Cart is Empty</h2>
                    <p>
                        Add books in your cart to view them here
                    </p>
                    <hr className="my-4" />
                </div>
            </div>
            </>)}
            
        </div>
    </div>
  )
}
