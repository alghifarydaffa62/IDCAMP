import React from "react"

class ContactInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            tag: ''
        }

        this.onNamechangerhandler = this.onNamechangerhandler.bind(this)
        this.onTagchangerhandler = this.onTagchangerhandler.bind(this)
        this.onSubmitchangerhandler = this.onSubmitchangerhandler.bind(this)
    }

    onNamechangerhandler(event) {
        this.setState(() => {
            return{
                name: event.target.value
            }
        })
    }

    onTagchangerhandler(event) {
        this.setState(() => {
            return{
                tag: event.target.value
            }
        })
    }

    onSubmitchangerhandler(event) {
        event.preventDefault()
        this.props.addContact(this.state)
    }

    render() {
        return(
            <form className="contact-input" onSubmit={this.onSubmitchangerhandler}>
                <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNamechangerhandler}/>
                <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagchangerhandler}/>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default ContactInput