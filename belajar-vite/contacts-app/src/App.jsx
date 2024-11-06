import ContactApp from './component/ContactApp'
import CounterApp from './component/CounterApp'
import MyForm from './component/myForm'
import ContactInput from './component/ContactInput'
import './style/style.css'

function App() {
    return(
        <div>
            <ContactApp/>
            <CounterApp/>
            <MyForm/>
        </div>
        
    )
}

export default App