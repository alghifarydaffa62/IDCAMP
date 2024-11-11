import React from "react"
import NoteItem from "./NoteItem"
import '../styles/style.css'

function NoteList({note, onDelete, onArchived}) {
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
                        archived={notes.archived}
                        onDelete={onDelete}
                        onArchived={onArchived}                    
                    />
                ))
            }
            
        </div>
    )
}

export default NoteList