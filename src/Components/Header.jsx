import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftar: "Daftar Makanan Nusantara",
            list: this.props.list
        };
    }
    render() {
        return (
            <div>
                <h1>Halaman Header</h1>
                <p>{this.state.daftar}</p>
                <p>{this.state.list}</p>
            </div >
        )
    }
}

export default Header