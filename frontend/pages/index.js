import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

import { db } from '../lib/firebase'
import { doc, getDoc} from 'firebase/firestore'
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience'

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
      <Hero 
        name={profileData.firstName + " " + profileData.lastName}
        intro={profileData.introduction}
        social={profileData.social}
      >
      </Hero>
      {/* <section>
        <p style={{textAlign: "center"}}>{ profileData.introduction }</p>
      </section> */}
      {/* <Social social={profileData.social}>
      </Social> */}
      <About about={profileData.about}>
      </About>
      <Experience>
      </Experience>
      <footer>
        
      </footer>
    </Layout>
  )
}