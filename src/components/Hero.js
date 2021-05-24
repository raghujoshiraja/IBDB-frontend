import React from 'react'
import BookWidgetGrid from '../components/BookWidgetGrid'
import BookInfoWidget from '../components/BookInfoWidget'

function Hero() {
  return (
    <div>
      <h1 className="mt-6 text-3xl">Explore Books</h1>
      <div className="flex">
        <BookWidgetGrid />
        <BookInfoWidget />
      </div>
    </div>
  )
}

export default Hero
