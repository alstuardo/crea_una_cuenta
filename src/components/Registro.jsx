import Alert from "./Alert"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Title from "./Title"
import 'bootstrap/dist/css/bootstrap.min.css'

const faceLogo = <FontAwesomeIcon icon={faFacebook} />
const gitLogo = <FontAwesomeIcon icon={faGithub} />
const linkLogo = <FontAwesomeIcon icon={faLinkedin} />

const Registro = ({alert, setAlert, color, msg}) => {
  return (
    <>
    <Title/>
    <SocialButton logo={faceLogo}/>
    <SocialButton logo={gitLogo}/>
    <SocialButton logo={linkLogo}/>
    <Formulario setAlert={setAlert}  />
    <Alert 
    color={color}
    alert={alert}
    msg={msg}
    />
    </>
  )
}

export default Registro