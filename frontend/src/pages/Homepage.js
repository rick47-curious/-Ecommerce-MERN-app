import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import {BookCategories} from '../components/BookCategories'
import { BookCarousel } from '../components/BookCarousel'
import { BookGallery } from '../components/BookGallery'

export const Homepage = () => {
  const [category,setCategory] = useState("");
  const [query,setQuery] = useState("");
  const handleFilter = (filterCategory)=>{
    setCategory(filterCategory);
  }
  const handleSearch = (searchQuery)=>{
    setQuery(searchQuery);
  }
  return (
    <div>
       <Navbar query={query} querySetter={handleSearch}/>
       <BookCategories category={category} categorySetter={handleFilter}/>
       <BookCarousel/>
       <BookGallery category={category} query={query}/>
    </div>
  )
}
