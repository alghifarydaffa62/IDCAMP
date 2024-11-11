import React from "react"
import '../styles/style.css'

class NoteInput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            charLimit: 50,
            charRemaining: 50
        }

        this.onTitlechangehandler = this.onTitlechangehandler.bind(this)
        this.onDescchangehandler = this.onDescchangehandler.bind(this)
        this.onSubmithandler = this.onSubmithandler.bind(this)
    }

    onTitlechangehandler(event) {
        const input = event.target.value;
        
        // Pastikan tidak melebihi batas karakter
        if (input.length <= this.state.charLimit) {
            this.setState({
                title: input,
                charRemaining: this.state.charLimit - input.length
            });
        }
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
                <h2>Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: {this.state.charRemaining}</p>
                <input className="note-input__title" type="text" placeholder="Masukkan judul catatan..." value={this.state.title} onChange={this.onTitlechangehandler}/><br/>
                <textarea className="note-input__body" placeholder="Tulis catatanmu disini..." value={this.state.body} onChange={this.onDescchangehandler}/><br/>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput