import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.css'

const Formulario = ({setAlert}) => {
        const [formData, setFormData] = useState({
          name:'',
          email:'',
          password:'',
          confirmPassword:''
        });
        
        const handleSubmit = (e) => {
          e.preventDefault();
      
          const {name, email, password, confirmPassword} = formData;
          const validateInput = !name || !email || !password || !confirmPassword;
          const validatePassword = password !== confirmPassword;
      
          validateInput ? setAlert({
            error: true,
            msg: 'Debes llenar todos los campos',
            color: 'danger'
          }) 
          : setAlert ({
            error: false,
            msg: 'Haz creado tu cuenta',
            color: 'success'
          })
      
          if (validatePassword){
            setAlert({
            error: true,
            msg: 'Las contraseñas no coinciden',
            color: 'danger'
            })
            return;
          }
         
          setFormData({
          name:'',
          email:'',
          password:'',
          confirmPassword:''
          })
        }
      
        const handleChange = (e) => {
          setFormData({...formData, [e.target.name]:e.target.value}) 
        }


  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicInput">
      <Form.Label className='subtitle'>o usa tu email para registrarte</Form.Label>
      <Form.Control 
      className='input' 
      type="text" 
      placeholder="Nombre" 
      name='name'
      onChange={handleChange}
      value={formData.name} 
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control 
      className='input' 
      type="email" 
      placeholder="Correo electrónico"
      name='email'
      onChange={handleChange}
      value={formData.email}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control 
      className='input' 
      type="password" 
      placeholder="Contraseña"
      name='password'
      onChange={handleChange}
      value={formData.password}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword2">
      <Form.Control 
      className='input' 
      type="password" 
      placeholder="Confirma tu contraseña"
      name='confirmPassword'
      onChange={handleChange}
      value={formData.confirmPassword}
      />
    </Form.Group>
  
    <Button className="btn" variant="success" type="submit">
      Registrarse
    </Button>
  </Form>
  )
}

export default Formulario
