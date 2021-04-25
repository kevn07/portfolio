import socialStyles from './social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import utilStyles from '../styles/utils.module.scss'
export default function Social({ ...props }) {
  return (
    < section style={{textAlign: "center"}}>
    <h1 className={utilStyles.headingLg}>socials</h1>
    <div className={socialStyles.container}>
      <a href={'https://github.com/' + props.social.github} className={socialStyles.iconContainer}>
        <FontAwesomeIcon icon={['fab', 'github']}  className={socialStyles.icon}/>
      </a> 
      <a href={'https://linkedin.com/in/' + props.social.linkedin} className={socialStyles.iconContainer}>
        <FontAwesomeIcon icon={['fab', 'linkedin']} className={socialStyles.icon}/>
      </a>
      <a href={'https://www.instagram.com/' + props.social.instagram} className={socialStyles.iconContainer}>
        <FontAwesomeIcon icon={['fab', 'instagram']} className={socialStyles.icon}/>
      </a>
      <a href={`mailto:${props.social.email}`} className={socialStyles.iconContainer}>
        <FontAwesomeIcon icon={['fas', 'envelope-square']} className={socialStyles.icon}/>
      </a>
    </div>
    </section>
  )
}