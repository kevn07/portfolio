import socialStyles from './social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import utilStyles from '../styles/utils.module.scss'
export default function Social({ ...props }) {
  return (
    <div className={socialStyles.container}>
      <a href={'https://github.com/' + props.social.github} className={socialStyles.iconContainer} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']}  className={socialStyles.icon}/>
      </a> 
      <a href={'https://linkedin.com/in/' + props.social.linkedin} className={socialStyles.iconContainer} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'linkedin']} className={socialStyles.icon}/>
      </a>
      <a href={'https://www.instagram.com/' + props.social.instagram} className={socialStyles.iconContainer} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'instagram']} className={socialStyles.icon}/>
      </a>
      <a href={`mailto:${props.social.email}`} className={socialStyles.iconContainer} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fas', 'envelope-square']} className={socialStyles.icon}/>
      </a>
    </div>
    // </section>
  )
}