import aboutStyles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Image from 'next/image'
export default function About ({...props}) {
  return (
    <div id="about" className={aboutStyles.container}>
      <h2 className={`${aboutStyles.heading} ${utilStyles.headingLg}`}>
        About Me
      </h2>
      <div className={aboutStyles.content}>
        <div className={aboutStyles.aboutContent}>    
            <p className={aboutStyles.aboutDescription}>
              <b style={{fontSize: 16}}>Hello!</b>
              <br/>
              <br/>
              I'm Kevin! A software engineer from Australia 🇦🇺. Although most of my time is spent building software from websites to microservices, I enjoy learning to build all kind of things (my youtube history is a testament to that)! It's awesome to see something come together from it's initial components. 
              <br/><br/>My primary focus is to develop technical solutions that makes life easier for not just the end-user but everyone involved which encompasses learning alot!
            </p>
            <p className={aboutStyles.skillsDescription}>
              <b style={{fontSize: 16}}>Tech I Work With!</b>
              <br/>
              <ul>
                {
                  props.skills.map((skill) => (
                    <li>
                      {skill}
                    </li>
                  ))
                }
              </ul>
            </p>
        </div>
      {/* <div className={aboutStyles.aboutImage}>
        <Image
          priority
          src="/images/keyboard.jpg"
          className={aboutStyles.img}
          height={150}
          width={200}
          layout='responsive'
          alt={props.name}
        />
      </div> */}


    </div>
    </div>
    
  )
}