import '../styles/global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faAddressCard } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelopeSquare, faAddressCard)

export default function App({Component, pageProps }) {
 return <Component { ...pageProps} />
}