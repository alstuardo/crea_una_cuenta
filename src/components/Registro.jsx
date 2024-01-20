import Alerta from "./Alerta"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import Title from "./Title"
import 'bootstrap/dist/css/bootstrap.min.css'

const faceLogo = <FontAwesomeIcon icon={faFacebook} size="xl"/>
const gitLogo = <FontAwesomeIcon icon={faGithub} size="xl" />
const linkLogo = <FontAwesomeIcon icon={faLinkedinIn} size="xl" />

const Registro = ({alert, setAlert, color, msg}) => {
  return (
    <>
    <Title/>
    <section>
    <SocialButton logo={faceLogo}/>
    <SocialButton logo={gitLogo}/>
    <SocialButton logo={linkLogo}/>
    </section>
    <Formulario setAlert={setAlert}  />
    <div className="contenedor">
    <Alerta
    color={color}
    alert={alert}
    msg={msg}
    />
    </div>
    </>
  )
}

export default Registro
