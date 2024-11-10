import React from "react"
import NoteContent from "./NoteContent"
import '../styles/style.css'

function NoteItem({id, title, date, body}) {
    return(
        <div>
            <h2>Catatan Aktif</h2>
            <div className="note-item">
                <NoteContent 
                    title={title}
                    date={date}
                    body={body}
                />
                <NoteAction id={id}/>
            </div>
        </div>
        
    )
}

export default NoteItem
