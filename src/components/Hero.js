import React from 'react'
import BookWidgetGrid from './ItemGrid'
import BookInfoWidget from '../components/BookInfoWidget'

function Hero() {
  const []

  return (
    <div>
      <h1 className="mt-6 text-3xl">Explore Books</h1>
      <div className="grid grid-cols-4">
        <BookWidgetGrid />
        <BookInfoWidget />
      </div>
    </div>
  )
}

export default Hero
