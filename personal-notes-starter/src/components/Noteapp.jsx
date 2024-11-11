import React from "react"
import NoteInput from "./NoteInput"
import { getInitialData, showFormattedDate } from "../utils"
import NoteList from "./NoteList"
import '../styles/style.css'

class NoteApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getInitialData()
        }

        this.onDeletehandler = this.onDeletehandler.bind(this)
        this.AddNotehandler = this.AddNotehandler.bind(this)
        this.ArchivedNotehandler = this.ArchivedNotehandler.bind(this)
    }

    onDeletehandler(id) {
        const note = this.state.note.filter(notes => notes.id !== id)
        this.setState({ note })
    }

    AddNotehandler({ title, body }) {
        this.setState((prevState) => {
            return {
                note: [
                    ...prevState.note,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(new Date().toISOString()),
                        archived: false
                    }
                ]
            }
        })
    }

    ArchivedNotehandler(id) {
        this.setState((prevState) => {
            return {
                note: prevState.note.map((note) => 
                    note.id === id ? { ...note, archived: !note.archived } : note
                )
            }
        })
    }

    render() {
        const activeNotes = this.state.note.filter(note => !note.archived)
        const archivedNotes = this.state.note.filter(note => note.archived)

        return(
            <div className="note-app__body">
                <NoteInput addNote={this.AddNotehandler}/>
                <h2>Catatan Aktif</h2>
                {
                    activeNotes.length > 0 
                    ? <NoteList note={activeNotes} onDelete={this.onDeletehandler} onArchived={this.ArchivedNotehandler}/>
                    : <h2 className="notes-list__empty-message">Tidak ada catatan</h2>
                }
                <h2>Arsip</h2>
                {
                    archivedNotes.length > 0
                    ? <NoteList note={archivedNotes} onDelete={this.onDeletehandler} onArchived={this.ArchivedNotehandler}/>
                    : <h2 className="notes-list__empty-message">Tidak ada catatan</h2>
                }
            </div>
        )
    }
}

export default NoteApp

