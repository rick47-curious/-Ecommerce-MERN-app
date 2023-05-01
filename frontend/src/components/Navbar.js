import React from 'react'
import axios from 'axios'
import './css/Navbar.css'
import { useCookies } from 'react-cookie';
export const Navbar = (props) => {
    const [cookies,setCookie,removeCookie] = useCookies(['accessToken']);
    const invokeSubmit = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        props.querySetter(document.getElementsByName("searchInput")[0].value);

    }
    const redirectLogin = (e)=>{
        e.preventDefault();
        window.location.href = "/authorize";
    }
    const logoutUser = (e)=>{
        e.preventDefault();
        axios.post('auth/logout')
        .then(res=>res.data)
        .then(response=>{
           removeCookie("accessToken");
        })
    }
    const redirectToCart = ()=>{
        window.location.href = "/cart";
    }
    const redirectToOrderList = ()=>{
        window.location.href = "/orderList";
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg" id="store-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <button id="brand-area">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                            </svg>
                            <span className='ms-2' id="brand-name">Your Book Store</span>
                        </button>
                    </a>
                        <div className="d-flex justify-content-between" id="navbar-container">
                            <div className="header-item">
                                <form className="d-flex" role="search" onSubmit={invokeSubmit}>
                                <div className="input-group" id="input-form">
                                    <input type="text" className="form-control" name="searchInput" placeholder="Search books..." aria-label="Example text with button addon" aria-describedby="button-addon1" id="search-bar"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={invokeSubmit}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </button>
                                </div>
                                </form>        
                            </div>
                            <div className="header-item">
                                {cookies.accessToken?(
                                    <button type="button" className='btn btn-secondary' id="login-btn" onClick={logoutUser}>Logout</button>
                                ):(
                                    <button type="button" className='btn btn-secondary' id="login-btn" onClick={redirectLogin}>Login</button>
                                )}  
                            </div>
                            {cookies.accessToken?(
                                <div className='header-item' id='linkToOrderList'>
                                    <button className="btn" onClick={redirectToOrderList}>My OrderList</button>
                                </div>
                            ):(<></>)}
                            <div className='header-item' id="action-dropdown">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-button">
                                        Go To
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item" onClick={redirectToOrderList}>My OrderList</li>
                                        <hr style={{"margin":"0"}}/>
                                        {cookies.accessToken?(
                                            <li className='dropdown-item' onClick={logoutUser}>Logout</li>
                                        ):(
                                            <li className='dropdown-item' onClick={redirectLogin}>Login</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id='shopping-cart-button' onClick={redirectToCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span className='ms-2'>Cart</span>
                            {props.count>0?(
                                <span id="counter" className="translate-middle badge rounded-pill bg-danger">
                                    {props.count}
                                </span>
                            ):(<></>)}
                            
                    </div>
                </div>
            </nav>
        </div>
    )
}
