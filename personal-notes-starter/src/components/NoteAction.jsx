import React from "react"
import '../styles/style.css'

function NoteAction({id, onDelete}) {
    return(
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item__archive-button">Arsipkan</button>
        </div>
    )
}

export default NoteAction