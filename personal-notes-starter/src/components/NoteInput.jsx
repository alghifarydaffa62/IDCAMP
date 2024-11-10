import React from "react"
import '../styles/style.css'

class NoteInput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }

        this.onTitlechangehandler = this.onTitlechangehandler.bind(this)
        this.onDescchangehandler = this.onDescchangehandler.bind(this)
        this.onSubmithandler = this.onSubmithandler.bind(this)
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
                body: event.target.value
            }
        })
    }

    onSubmithandler(event) {
        event.preventDefault()
        this.props.addNote(this.state)
    }

    render() {
        return(
            <form className="note-input" onSubmit={this.onSubmithandler}>
                <input type="text" placeholder="Masukkan judul catatan..." value={this.state.title} onChange={this.onTitlechangehandler}/><br/>
                <textarea placeholder="Tulis catatanmu disini..." value={this.state.body} onChange={this.onDescchangehandler}/><br/>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput