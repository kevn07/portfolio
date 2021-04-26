import aboutStyles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'
export default function About ({...props}) {
  return (
    <div id="about" className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.aboutContent}>    
        <h1>
          About Me
        </h1>
        
        <p>
          {props.about}
        </p>
      </div>

    </div>

  )
}