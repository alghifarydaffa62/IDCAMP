import React from "react"
import NoteInput from "./NoteInput"
import '../styles/style.css'

class NoteApp extends React.Component {
    render() {
        return(
            <div className="note-app__body">
                <h2>Buat Catatan</h2>
                <NoteInput/>
            </div>
        )
    }
}

export default NoteApp