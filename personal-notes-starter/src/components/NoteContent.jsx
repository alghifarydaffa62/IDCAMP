import React from "react";
import '../styles/style.css'

function NoteContent({title, date, body}) {
    return(
        <div className="note-item__content">
            <h4 className="note-item__title">{title}</h4>
            <p className="note-item__date">{date}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteContent