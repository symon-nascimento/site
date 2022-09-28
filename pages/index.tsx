import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Importanto componentes
import CardSkiils from '../components/CardSkills'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <>
    <NavBar />
    <div className={styles.container}>
      <Head>
        <title>Symon Nascimento</title>
        <meta name="description" content="Hard Skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <main className={styles.main}>
        <CardSkiils />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/symon-nascimento"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Symon N Simon
        </a>
      </footer>
    </div>
    </>
  )
}

export default Home
