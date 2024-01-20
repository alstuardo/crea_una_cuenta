import Alert from "./Alert"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const faceLogo = <FontAwesomeIcon icon={faFacebook} />
const gitLogo = <FontAwesomeIcon icon={faGithub} />
const linkLogo = <FontAwesomeIcon icon={faLinkedin} />

const Registro = () => {
  return (
    <>
    <SocialButton logo={faceLogo}/>
    <SocialButton logo={gitLogo}/>
    <SocialButton logo={linkLogo}/>
    <Formulario />
    <Alert/>
    </>
  )
}

export default Registro