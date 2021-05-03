import '../styles/style.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelopeSquare, faUser)

export default function App({Component, pageProps }) {
 return <Component { ...pageProps} />
}