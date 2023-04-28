import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { Navbar } from '../components/Navbar'
import { BookCategories } from '../components/BookCategories'
import { BookCarousel } from '../components/BookCarousel'
import { BookGallery } from '../components/BookGallery'

export const Homepage = () => {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [cookies, setCookie] = useCookies(['accessToken']);
  const handleFilter = (filterCategory) => {
    setCategory(filterCategory);
  }
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  }
  return (
    <div>
      <Navbar query={query} querySetter={handleSearch} />
      {cookies.accessToken ? (
        <>
          <BookCategories category={category} categorySetter={handleFilter} />
        </>
      ) : (<></>)}
      <BookCarousel />
      {cookies.accessToken ? (
        <>
          <BookGallery category={category} query={query} />
        </>
      ) : (
        <>
          <div id="instruction-banner">
            <div class="p-4 shadow-4 rounded-3" style={{"background-color": "hsl(0, 0%, 94%);"}}>
              <h2>Please login to Continue</h2>
              <p>
                Login to unlock the best collection of books "Your Book Store" offers
              </p>
              <hr class="my-4" />
            </div>

          </div>
        </>
      )}

    </div>
  )
}
