import Head from 'next/head'
import Link from "next/link";
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

import { db } from '../lib/firebase'
import { doc, getDoc} from 'firebase/firestore'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export async function getStaticProps() {
  const docRef = doc(db, "portfolio", "profile")
  const docSnap = await getDoc(docRef)
  let profileData = {
    error: "no profile data"
  };
  if (docSnap.exists()) {
    profileData = docSnap.data()
  }
  return {
    props: {
      profileData
    }
  }
}

export default function Home({ profileData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{ profileData.introduction }</p>
        <p>
          { JSON.stringify(profileData) }
        </p>
        <Link href='https://www.linkedin.com/in/kevin-hehe/'>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </Link>
        <div>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </div>
        <div>
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </div>
        
      </section>
    </Layout>
  )
}