import React from "react"
import NoteContent from "./NoteContent"
import NoteAction from "./NoteAction"
import { showFormattedDate } from "../utils"
import '../styles/style.css'

function NoteItem({id, title, date, body, onDelete, onArchived, archived}) {
    return(
            <div className="note-item">
                <NoteContent 
                    title={title}
                    date={showFormattedDate(date)}
                    body={body}
                />
                <NoteAction id={id} onDelete={onDelete} onArchived={onArchived} archived={archived}/>
            </div>
    )
}

export default NoteItem
