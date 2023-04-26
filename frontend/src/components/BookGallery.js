import React, { useEffect, useState } from 'react'
import './css/BookGallery.css'
import axios from 'axios'
export const BookGallery = (props) => {
     const [bookdata,setBookData] = useState();

     useEffect(()=>{
         axios.get(`/books/GetAllBooks?category=${props.category}`)
         .then(res => res.data).then(response=>{
               setBookData(response);
         }) 
     },[props.category]);
     
        useEffect(()=>{
            if(props.query){
                axios.get(`/books/search?q=${props.query}`)
                .then(res=>res.data).then(response=>{
                    setBookData(response);
                })
            }
        },[props.query]);

  return (
    <div id="gallery-container">
        {/* Conditional based on filtering data or showing all data with count */}
        <div className='heading fs-2'>Showing {bookdata && bookdata.length} Books</div>
        <div id="gridContainer">
            {bookdata && bookdata.map((item,index)=>{
              return  <div className='grid-item' key={index}>
              <img className ="book-image" src={item.image_url} alt={`item-${index}`}/>
              <div className='desc mt-2'>
                   <p className='book-name fs-4'>{item.title}</p>
                   <p className='book-category grey-text'>{item.category}</p>
              </div>
              <div className="rating mt-2">
                    {item.rating>=4.0?( <span className="badge text-bg-success star-rating">
                       <span className='me-1'>{item.rating}</span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mb-1" viewBox="0 0 16 16">
                           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                       </svg>
                   </span>):( <span className="badge text-bg-warning star-rating">
                       <span className='me-1'>{item.rating}</span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill mb-1" viewBox="0 0 16 16">
                           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                       </svg>
                   </span>)}
                  
                   <span className='review-count ms-2 grey-text'>({item.reviews})</span>
              </div>
              <div className="price mt-2">
                   <span className='fw-bold'>$ {item.price}</span>
              </div>
              <div className="button-area mt-2">
               <button type='button' className='btn btn-success cart-btn fw-bold'>Add to Cart</button>
              </div>
               </div>
            })}
        </div>
    </div>
  )
}
