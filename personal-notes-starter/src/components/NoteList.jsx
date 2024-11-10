import React from "react"
import NoteItem from "./NoteItem"
import '../styles/style.css'

function NoteList({note}) {
    return(
        <div className="notes-list">
            {
                note.map((notes) => {
                    <NoteItem
                        key={notes.id}
                        id={notes.id}
                        {...notes}
                    />
                })
            }
            
        </div>
    )
}

export default NoteList