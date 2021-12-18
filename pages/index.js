import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toby B</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/peep (3).png" />
      </Head>
      <ChakraProvider>
    <div className="App">
      <header className="App-header" />
  </div>
  <h1 className={styles.opentext}>Hi,<br></br> I&apos;m <br></br>Toby.</h1>
  <h1 className={styles.subtitle}>13 y/o full stack web dev and designer.</h1>
  <div className={styles.mediv}>
  <Image className={styles.me} src="/peep (3).png" alt="Toby" height="700" width="700" />
  </div>
</ChakraProvider>
    </div>
  );
}
