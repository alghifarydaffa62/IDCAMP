import React from 'react'
import '../styles/style.css'

class NoteHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }

        this.onSearchhandler = this.onSearchhandler.bind(this)
    }

    onSearchhandler(event) {
        this.setState(() => {
            return{
                search: event.target.value
            }
                
        })
    }
    
    render() {
        return(
            <div className="note-app__header">
                <h1>Notes</h1>
                <input placeholder="cari catatan..." value={this.state.search} onChange={this.onSearchhandler}></input>
            </div>
        )
    }
}

export default NoteHeader