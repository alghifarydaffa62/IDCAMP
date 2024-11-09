import React from "react";
import NoteTitle from "./NoteTitle"
import NoteDate from "./Notedate"
import NoteBody from "./NoteBody"
import NoteAction from "./NoteAction";
import '../styles/style.css'

class NoteContent extends React.Component {
    render() {
        return(
            <div className="note-item__content">
                <NoteTitle/>
                <NoteDate/>
                <NoteBody/>
                <NoteAction/>
            </div>
        )
    }
}

export default NoteContent