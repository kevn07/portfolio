import experienceStyles from '../styles/experience.module.scss'
import utilStyles from '../styles/utils.module.scss'
export default function Experience({...props}) {
  return (
    <div id="experience" className={experienceStyles.container}>
      <div>    
        <h2 className={`${utilStyles.headingLg} ${experienceStyles.heading}`}>
          Experience
        </h2>
          {
            props.experience.map((obj) => (
              <section key={obj.company}>
                  <h3 style={{
                    textAlign:'center'
                  }}>{obj.company}</h3>
                  {
                    obj.position.map((position) => (
                      <section key={position.name}>
                        <p>
                          {position.name}
                          <br/>
                          {position.startDate + " - " + position.endDate}
                        </p>
                        <ul>
                          {position.description.map((responsibilies, index) => (
                            <li key={index}>
                              { responsibilies }
                            </li>
                          ))}
                        </ul>
                        <hr/>
                      </section>
                      
                    ))
                  }
              </section>
            ))
          }
      </div>
    </div>
  )
}