import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import List from './Components/List'

const App = () => {
  return (
    <div>
        <Header list="3 Terbaik"/>
        Makanan Khas
        <List/>
        <Footer name="Makanan Nusantar" tahun="2022"/>
    </div>
  )
}

export default App