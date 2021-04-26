import navStyles from '../styles/nav.module.scss'
import { navLinks } from '../lib/config'
import Link from 'next/link'
export default function Nav() {
  return (
    <div className={navStyles.navContainer}>
    {
      navLinks.map((obj) => (
        <span>
          <Link href={obj.url}>
              {obj.name}
          </Link>
        </span>
      ))
    }
    </div>
  )
}