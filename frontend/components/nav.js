import navStyles from './nav.module.scss'
import { navLinks } from '../lib/config'
import Link from 'next/link'
export default function Nav() {
  return (
    <div className={navStyles.navContainer}>
    {
      navLinks.map(({name, url}) => (
          <Link href={url}>
              {name}
          </Link>
      ))
    }
    </div>
  )
}