import React from "react"
import NoteItem from "./NoteItem"
import '../styles/style.css'

function NoteList({note, onDelete}) {
    return(
        <div className="notes-list">
            {
                note.map((notes) => (
                    <NoteItem
                        key={notes.id}
                        id={notes.id}
                        title={notes.title}
                        date={notes.createdAt}
                        body={notes.body}
                        onDelete={onDelete}                    
                    />
                ))
            }
            
        </div>
    )
}

export default NoteList