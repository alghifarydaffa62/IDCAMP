import React from "react"
import '../styles/style.css'

class NoteInput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            desc: ''
        }

        this.onTitlechangehandler = this.onTitlechangehandler.bind(this)
        this.onDescchangehandler = this.onDescchangehandler.bind(this)
    }

    onTitlechangehandler(event) {
        this.setState(() => {
            return{
                title: event.target.value
            }
        })
    }   
    
    onDescchangehandler(event) {
        this.setState(() => {
            return{
                desc: event.target.value
            }
        })
    }

    render() {
        return(
            <div className="note-input">
                <input type="text" placeholder="Masukkan judul catatan..." value={this.state.title} onChange={this.onTitlechangehandler}/><br/>
                <textarea placeholder="Tulis catatanmu disini..." value={this.state.desc} onChange={this.onDescchangehandler}/><br/>
                <button type="submit">Buat</button>
            </div>
        )
    }
}

export default NoteInput