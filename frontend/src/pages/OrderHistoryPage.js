import React, { useEffect, useState } from 'react'
import './css/OrderHistoryPage.css'
import axios from 'axios'
export const OrderHistoryPage = () => {
    const [orderList,setOrderList] = useState([]);
    useEffect(()=>{
        axios.get('/order/getOrderHistory')
        .then(res => res.data)
        .then(response=>{
            setOrderList(response);
        })
    },[orderList])
    const goBack = ()=>{
        window.history.back();
    }
  return (
    <>
        <div id="orderContainer">
            <div className="container text-center" id="order-table">
                <div>
                    <button type="button" className="btn btn-primary" id="orderHistory-back-btn" onClick={goBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span className='ms-1'>Back</span>
                    </button>
                    {orderList.length>0?(
                        <h1 className='text-center mb-3 header-text'>Order History</h1>
                    ):(<></>)}
                    
                </div>
                {orderList.length>0?(
                  <>
                    <div className="row order-header-row">
                        <div className="col fw-bold">Order #</div>
                        <div className="col fw-bold">Placed At</div>
                        <div className="col fw-bold">Placed By</div>
                        <div className="col fw-bold">Status</div>
                    </div>
                    {orderList && orderList.map((item,index)=>{
                        return <div className=" row order-result-row p-2" key={index}>
                            <div className="col " title={item.id}>{item.id}</div>
                            <div className="col ">{item.OrderDate}</div>
                            <div className="col ">{item.PlacedBy}</div>
                            {item.Status==="Completed"?(
                                <div className='col badge text-bg-success status-bar'>{item.Status}</div>
                            ):(<></>)}
                            {item.Status==="In-Process"?(
                                <div className='col badge text-bg-warning status-bar'>{item.Status}</div>
                            ):(<></>)}
                            {item.Status==="Cancelled"?(
                                <div className='col badge text-bg-danger status-bar'>{item.Status}</div>
                            ):(<></>)}
                        </div>
                    })}
                  </>
                ):(
                    <>
                     <div id="instruction-banner" style={{"color":"white"}}>
                        <div className="p-4 shadow-4 rounded-3">
                            <h2>No Orders Found</h2>
                            <p>
                                We are eagerly waiting for your next order
                            </p>
                            <hr className="my-4" />
                        </div>
                    </div>
                    </>
                )}
               
            </div>
        </div>
    </>
  )
}
