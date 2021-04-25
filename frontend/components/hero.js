
import Image from 'next/image'
import utilStyles from '../styles/utils.module.scss'
import heroStyles from './hero.module.scss'

export default function Hero ({...props}) {
  return (
    <div className={heroStyles.heroContainer}>
        <div className={heroStyles.imageContainer}>
          <Image
              priority
              src="/images/monke.jpg"
              className={heroStyles.image}
              height={144}
              width={144}
              alt={props.name}
            />
            
        </div>
        <div className={heroStyles.descriptionContainer}>
          <h1 className={utilStyles.heading2Xl}>{ props.name }</h1>
          <p style={{fontSize: "0.75rem"}}>
            {props.intro}
          </p>
          <p>
            
          </p>
        </div>
          
    </div>

  )
}