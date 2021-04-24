import socialMediaStyles from './socialmedia.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialMediaBar({ ...props }) {
  return (      
    <div>
      <a href={'https://github.com/' + props.socialMedia.github}>
        <FontAwesomeIcon icon={['fab', 'github']} className={socialMediaStyles.icon}/>
      </a> 
      <a href={'https://linkedin.com/in/' + props.socialMedia.linkedin}>
        <FontAwesomeIcon icon={['fab', 'linkedin']} className={socialMediaStyles.icon}/>
      </a>
      <a href={'https://www.instagram.com/' + props.socialMedia.instagram}>
        <FontAwesomeIcon icon={['fab', 'instagram']} className={socialMediaStyles.icon} />
      </a>
    </div>
  )
}