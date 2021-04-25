import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

import { db } from '../lib/firebase'
import { doc, getDoc} from 'firebase/firestore'

import Social from '../components/social';
import Hero from '../components/hero';
import About from '../components/about';

export async function getStaticProps() {
  const docRef = doc(db, "portfolio", "profile")
  const docSnap = await getDoc(docRef)
  let profileData = {
    error: "no profile data"
  };
  
  if (docSnap.exists()) {
    profileData = docSnap.data()
  }
  console.log(profileData)
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
      <Hero 
        name={profileData.firstName + " " + profileData.lastName}
        intro={profileData.introduction }
      >
      </Hero>
      {/* <section>
        <p style={{textAlign: "center"}}>{ profileData.introduction }</p>
      </section> */}
      <Social social={profileData.social}>
      </Social>
      <About about={profileData.about}>
      </About>
      <footer>
        
      </footer>
    </Layout>
  )
}