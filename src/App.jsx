import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

const App = () => {
  const [alert, setAlert] = useState({
    error: false,
    msg:'',
    color:''
  })

 
  return (
    <main>
      <Registro 
      alert={alert} 
      setAlert={setAlert}
      color ={alert.color}
      msg={alert.msg}
      />
    </main>
  )
}

export default App
