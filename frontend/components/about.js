import aboutStyles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Image from 'next/image'
export default function About ({...props}) {
  return (
    <div id="about" className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.aboutDescription}>    
        <h2 className={`${aboutStyles.heading} ${utilStyles.headingLg}`}>
          About Me
        </h2>
        <p>
          {props.about}
        </p>
      </div>
      <Image
        priority
        src="/images/keyboard.jpg"
        className={aboutStyles.aboutImage}
        height={150}
        width={200}
        layout='responsive'
        alt={props.name}
      />

    </div>

  )
}