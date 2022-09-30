import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Importanto componentes
import CardSkiils from '../components/CardSkills'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'

const Home: NextPage = () => {
  return (
    <div>
   {/*  <AboutMe/> */}
    <NavBar />
    <div className={styles.container}>
      <Head>
        <title>Symon Nascimento</title>
        <meta name="description" content="Hard Skills" />
        <link rel="icon" href="/devops.ico" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
      </Head>

     
      <main className={styles.main} style={{overflow:'auto'}}>
        <CardSkiils />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/symon-nascimento"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Symon N Simon
        </a>
      </footer>
    </div>
    </div>
  )
}

export default Home
