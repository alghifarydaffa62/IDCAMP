import React from 'react'
import '../styles/style.css'

function Navbar() {
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <input placeholder="cari catatan..."></input>
        </div>
    )
}

export default Navbar