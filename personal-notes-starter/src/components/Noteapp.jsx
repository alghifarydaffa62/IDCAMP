import React from "react"
import NoteInput from "./NoteInput"
import { getInitialData } from "../utils"
import NoteList from "./NoteList"
import '../styles/style.css'

class NoteApp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            note: getInitialData()
        }
    }

    render() {
        return(
            <div className="note-app__body">
                <h2>Buat Catatan</h2>
                <NoteInput/>
                <NoteList note={this.state.note}/>
            </div>
        )
    }
}

export default NoteApp