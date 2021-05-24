import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
        <main className="px-6 md:px-14 xl:px-16">
          <Switch>
            <Route component={Home} />
          </Switch>
        </main>
      <Footer />
    </>
  )
}

export default App
