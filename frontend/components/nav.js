import navStyles from '../styles/nav.module.scss'
import { navLinks } from '../lib/config'
import fadeDown from '../styles/transitions/fadedown.module.scss'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Link from 'next/link'
export default function Nav() {
  return (
    <TransitionGroup>
      <CSSTransition in={true} appear={true} timeout={1000} classNames={fadeDown}>
        <div className={navStyles.navContainer}>
        {
          navLinks.map((obj) => (
              <Link href={obj.url} key={obj.name}>
                  {obj.name}
              </Link>
          ))
        }
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}