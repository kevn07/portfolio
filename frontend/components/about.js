import aboutStyles from './about.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import utilStyles from '../styles/utils.module.scss'
export default function About ({...props}) {
  return (
    <div id="about" className={aboutStyles.aboutContainer}>
      <div>
        <FontAwesomeIcon icon={['fas', 'user']} className={utilStyles.icon}></FontAwesomeIcon>
        <h1>
          About Me
        </h1>
      </div>
      
      <p>
        {props.about}
      </p>
    </div>

  )
}