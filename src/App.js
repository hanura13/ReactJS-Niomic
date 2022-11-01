import React from 'react'
import MenuKontak from './Pages/MenuKontak'
import MenuProduct from './Pages/MenuProduct'
import MenuTentangKami from './Pages/MenuTentangKami'
import MenuUtama from './Pages/MenuUtama'

const Header =() => {
    return(
        <div>
            <h1>Ini Halaman untuk Header</h1>
        </div>
    )
}

const Footer =() => {
    return(
        <div>
            <h1>Ini Halaman untuk Footer</h1>
        </div>
    )
}

const App = () => {
  return (
    <div>
        <Header/>
        <MenuUtama/>
        <MenuProduct/>
        <MenuKontak/>
        <MenuTentangKami/>
        <Footer/>
    </div>
  )
}

export default App