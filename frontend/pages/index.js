import { db } from '../lib/firebase'
import { doc, getDoc} from 'firebase/firestore'
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience'
import Layout from '../components/layout'

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
      <Hero 
        name={profileData.firstName + " " + profileData.lastName}
        intro={profileData.introduction}
        social={profileData.social}
      >
      </Hero>
      <About></About>
      <Experience experience={profileData.experience}></Experience>
    </Layout>
  )
}