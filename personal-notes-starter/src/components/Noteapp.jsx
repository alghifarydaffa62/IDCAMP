import React from "react"
import NoteInput from "./NoteInput"
import { getInitialData } from "../utils"
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
            </div>
        )
    }
}

export default NoteApp