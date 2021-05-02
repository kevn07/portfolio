import aboutStyles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'
import fadeLeft from '../styles/transitions/fadeLeft.module.scss'
import Reveal from './containers/scrollReveal'
import Image from 'next/image'
export default function About ({...props}) {
  return (
    <div id="about" className={aboutStyles.container}>
      <div className={aboutStyles.aboutContent}>    
        {/* <CSSTransition in={true} appear={true} timeout={1000} classNames={fadeLeft}>
          <section>
          <h2 className={`${aboutStyles.heading} ${utilStyles.headingLg}`}>
            About Me
          </h2>
          <p className={aboutStyles.aboutDescription}>
            I'm Kevin! A software engineer from Australia 🇦🇺. I very much enjoy learning to build things not just in tech but everything! It's awesome to see something come together from it's initial components. 
            <br/><br/>My primary focus is to develop technical solutions that makes life easier for not just the end-user but everyone involved which encompasses learning alot!
          </p>
          </section>
        </CSSTransition> */}
        <Reveal>
          <h2 className={`${aboutStyles.heading} ${utilStyles.headingLg}`}>
              About Me
          </h2>
          <p className={aboutStyles.aboutDescription}>
            I'm Kevin! A software engineer from Australia 🇦🇺. I very much enjoy learning to build things not just in tech but everything! It's awesome to see something come together from it's initial components. 
            <br/><br/>My primary focus is to develop technical solutions that makes life easier for not just the end-user but everyone involved which encompasses learning alot!
          </p>
        </Reveal>
 
      </div>
      <div className={aboutStyles.aboutImage}>
        <Image
          priority
          src="/images/keyboard.jpg"
          className={aboutStyles.img}
          height={150}
          width={200}
          layout='responsive'
          alt={props.name}
        />
      </div>


    </div>

  )
}