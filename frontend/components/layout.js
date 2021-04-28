import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Nav from './nav'
import { useState, useEffect } from 'react'
export const siteTitle = 'Portfolio Site'

export default function Layout({ children, home }) {
  const isHome = home;
  const [isLoading, setIsLoading] = useState(isHome);
  console.log(isLoading)
  console.log(isHome)
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      
      {isLoading && isHome ? (
            <div style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh"
            }}>
              <Nav className={styles.header}></Nav>
              <main>{children}</main>
            </div>
          ) : (
            <div>
              loading..
            </div>
          )}
    </div>
  )
}