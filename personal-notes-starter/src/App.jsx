import React from 'react'
import Navbar from './components/Navbar'
import NoteApp from './components/Noteapp'
import './styles/style.css'

function App() {
    return(
        <div>
            <Navbar/>
            <NoteApp/>
        </div>
    )
}

export default App