import React from 'react'

const Top = () => {

    function handlePesan(value, e) {
        e.preventDefault()
        alert("Halaman Top tampil")
        console.log(value)
    }

    return (
        <div>
            <a href='/' onClick={(e) => handlePesan("Pesan dari top", e)}>Halaman Top</a>
        </div>
    )
}

export default Top