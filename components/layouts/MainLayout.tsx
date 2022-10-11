import styles from './MainLayout.module.css';
import Head from 'next/head';
import { NavBar } from '../NavBar';
import { FC } from 'react';

type PropsWithChildren = {
  children: React.ReactNode
}

export const MainLayout: FC <PropsWithChildren> = ({children}) => {
  return (
    
        <div className={styles.container}>
          <Head>
            <title>Home - Veronica</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <NavBar />
    
          <main className={styles.main}>
          
            {children}
          </main>
    
          
        </div>
      )
};

