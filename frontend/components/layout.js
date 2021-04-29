
import styles from '../styles/layout.module.scss'
import Nav from './nav'
import { useState, useEffect } from 'react'
export const siteTitle = 'Portfolio Site'

export default function Layout({ children, home }) {
  const isHome = home;
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <div className={styles.container}>
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