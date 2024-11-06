import React from "react"

class MyForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            gender: 'Man'
        }

        this.onNamechangehandler = this.onNamechangehandler.bind(this)
        this.onEmailchangehandler = this.onEmailchangehandler.bind(this)
        this.onGenderchangehandler = this.onGenderchangehandler.bind(this)
        this.onSubmithandler = this.onSubmithandler.bind(this)
    }

    onNamechangehandler(event) {
        this.setState(() => {
            return{
                name: event.target.value
            }
        })
    }

    onEmailchangehandler(event) {
        this.setState(() => {
            return{
                email: event.target.value
            }
        })
    }

    onGenderchangehandler(event) {
        this.setState((prevState) => {
            return {
                gender: event.target.value
            }
        })
    }

    onSubmithandler(event) {
        event.preventDefault()

        const message = `
            Name: ${this.state.name}
            Email: ${this.state.email}
            Gender: ${this.state.gender}
        `

        alert(message)
    }

    render() {
        return(
            <div>
                <h1>Register Form</h1>
                <form onSubmit={this.onSubmithandler}>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNamechangehandler}/>
                    <br/>
                    
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" value={this.state.email} onChange={this.onEmailchangehandler}/>
                    <br/>

                    <label htmlFor="gender">Gender: </label>
                    <select id="gender" value={this.state.gender} onChange={this.onGenderchangehandler}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br/>

                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default MyForm