import React from 'react'
import Navbar from '../Navbar'
import restaurant_result_1 from "../images/restaurant_result_1.jpeg"

function Search() {
  return (
    <div className="page-container">
      <div className='search-container'>
        <div className='search-results'>
          <h1 className='results-title'>Search Results <span className='search-keyword'>“Fire Wings”</span> (showing <span className='number-of-results'>1</span> results)</h1>
    
          <div className='result'>
            <img src={restaurant_result_1} className='restaurant-result-image' />
            <div className='restaurant-result-content'>
              <h1 className='restaurant-name'><span className='number'>1.</span> Fire Wings</h1>
              <p><span className='rate'>3.9</span> (<span className='reviews'>798</span> reviews)</p>
              <p className='address'>1138 Saratoga Ave San Jose, CA 95129</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search