import React, { Component } from 'react'
import Image from './Image'

class List extends Component {
    render() {
        return (
            <ol>
                <Image linkImage="https://awsimages.detik.net.id/community/media/visual/2022/01/13/rm-padang-rating-tinggi-1.jpeg?w=700&q=90" />
                <li>Nasi Padang</li>

                <Image linkImage="https://sweetrip.id/wp-content/uploads/2021/12/hargamenu__257513992_588790698895721_3055980880098725151_n.jpg" />
                <li>Sate</li>

                <Image linkImage="https://sweetrip.id/wp-content/uploads/2021/10/resep-soto-banjar.jpg" />
                <li>Soto Banjar</li>
            </ol>
        )
    }
}

export default List