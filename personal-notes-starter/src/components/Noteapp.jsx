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
    }

    onDeletehandler(id) {
        const note = this.state.note.filter(notes => notes.id !== id)
        this.setState({note})
    }

    AddNotehandler({title, body}) {
        this.setState((prevState) => {
            return {
                note: [
                    ...prevState.note,
                    {
                        id: + new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(new Date().toISOString()),
                        archieved: false
                    }
                ]
            }
        })
    }

    render() {
        return(
            <div className="note-app__body">
                <h2>Buat Catatan</h2>
                <NoteInput addNote={this.AddNotehandler}/>
                {
                    this.state.note.length > 0 
                    ? <NoteList note={this.state.note} onDelete={this.onDeletehandler}/>
                    : <h2 className="notes-list__empty-message">Tidak ada catatan</h2>
                }
            </div>
        )
    }
}

export default NoteApp