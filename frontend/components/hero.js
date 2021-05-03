
import Image from 'next/image'
import utilStyles from '../styles/utils.module.scss'
import heroStyles from '../styles/hero.module.scss'
import Social from './social'
import Link from 'next/link'
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import fadeUp from '../styles/transitions/fadeup.module.scss'

export default function Hero ({...props}) {
  return (
    <TransitionGroup>
    <CSSTransition in={true} appear={true} timeout={1000} classNames={fadeUp}>
    <div className={heroStyles.container}>
            <div className={heroStyles.imageContainer}>
              <Link href="/#about">
                <Image
                    priority
                    src="/images/monke.jpg"
                    className={heroStyles.image}
                    height={150}
                    width={150}
                    alt={props.name}
                  />
              </Link>
            </div>


        <div className={heroStyles.descriptionContainer}>
          <h1 className={utilStyles.heading2Xl}
          >{ props.name }</h1>
          <div className={heroStyles.intro} style={{fontSize: "0.75rem"}}>
            <p>
              {props.intro}
            </p>
          </div>
        </div>
        <section className={heroStyles.socialContainer}>
          <Social social={props.social}>
          </Social>
        </section>
    </div>
    </CSSTransition>
  </TransitionGroup>

  )
}