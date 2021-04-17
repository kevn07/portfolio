import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

import { getStaticData } from '../lib/tempData'

//TO DO: retrieve static description from NOSQLDB
export async function getStaticProps() {
  const profileData = getStaticData()
  console.log(profileData)
  console.log(profileData.socialMedia)
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
        <p>I am a recent graduate of Bachelor of Software Engineering with industry experience developing microservices and applications for cloud environments. I am eager to pursue learning in emerging technologies and utilising them to build technical solutions that benefit end-users.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          { JSON.stringify(profileData) }
        </p>
      </section>
    </Layout>
  )
}