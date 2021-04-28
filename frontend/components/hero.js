
import Image from 'next/image'
import utilStyles from '../styles/utils.module.scss'
import heroStyles from '../styles/hero.module.scss'
import Social from './social'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group';
import fadeStyles from '../styles/fade.module.scss'
import { useState, useEffect } from 'react'
export default function Hero ({...props}) {
  const [isMounted, setIsMounted] = useState(false);
  console.log(isMounted)
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={heroStyles.container}>
        {/* <CSSTransition in={inProp} timeout={2000} classNames={fadeStyles}>
          <div>
            {"I'll receive my-node-* classes"}
          </div>
        </CSSTransition> */}
        {/* <button type="button" onClick={() => setInProp(!inProp)}>
          Click to Enter
        </button> */}
        <CSSTransition in={isMounted} timeout={5000} classNames={fadeStyles}>
          <div>
              hello world
          </div>
          {/* <div className={heroStyles.imageContainer}>
          
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
            
          
        </div> */}
        </CSSTransition>
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

  )
}