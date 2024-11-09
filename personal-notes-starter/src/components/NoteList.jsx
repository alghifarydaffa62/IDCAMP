import React from "react"
import NoteItem from "./NoteItem"
import '../styles/style.css'

function NoteList({notes}) {
    return(
        <div className="notes-list">
            <NoteItem/>
        </div>
    )
}

export default NoteList