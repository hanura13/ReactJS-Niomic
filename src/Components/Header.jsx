import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftar: "Daftar Makanan Nusantara",
            list: this.props.list
        };

        //Menggunakan ini jika tidak memakai arrow function pada event handler
        // this.handlePesan = this.handlePesan.bind(this)
    }

    handlePesan = (value, e) => {
        e.preventDefault()
        alert(this.state.daftar)
        console.log(value)
    }
    render() {
        return (
            <div>
                <h1>Halaman Header</h1>
                <p>{this.state.daftar}</p>
                <p>{this.state.list}</p>
                <a href='/' onClick={(e) => this.handlePesan("Pesan dari Header", e)}>CLick me</a>
            </div >
        )
    }
}

export default Header