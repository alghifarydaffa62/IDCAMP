import React from 'react'
import NoteHeader from './components/Navbar'
import NoteApp from './components/Noteapp'
import './styles/style.css'

function App() {
    return(
        <div>
            <NoteHeader/>
            <NoteApp/>
        </div>
    )
}

export default App