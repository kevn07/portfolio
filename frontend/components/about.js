import aboutStyles from './about.module.scss'

export default function About ({...props}) {
  return (
    <div id="about" className={aboutStyles.aboutContainer}>
      <h1>
        About Me
      </h1>
      <p>
        {props.about}
      </p>
    </div>

  )
}