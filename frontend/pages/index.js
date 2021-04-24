import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

import { db } from '../lib/firebase'
import { doc, getDoc} from 'firebase/firestore'

import SocialMediaBar from '../components/socialMedia';

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
        {/* <p>
          { JSON.stringify(profileData) }
        </p> */}
      </section>
      <section>
        <SocialMediaBar socialMedia={profileData.socialMedia}>
        </SocialMediaBar>
      </section>
    </Layout>
  )
}