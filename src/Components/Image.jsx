import React, { Component } from 'react'

class Image extends Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.linkImage}
                    alt='gambar-makanan'
                    width="500" />
            </div>
        )
    }
}

export default Image