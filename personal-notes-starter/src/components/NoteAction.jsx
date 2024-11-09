import React from "react"
import DeleteButton from "./delete"
import Archive from "./archive"
import '../styles/style.css'

function NoteAction() {
    return(
        <div className="note-item__action">
            <DeleteButton/>
            <Archive/>
        </div>
    )
}

export default NoteAction