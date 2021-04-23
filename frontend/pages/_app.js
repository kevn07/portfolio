import '../styles/global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { ReactElement } from 'react'

library.add(fab)

export default function App({Component, pageProps }) {
 return <Component { ...pageProps} />
}