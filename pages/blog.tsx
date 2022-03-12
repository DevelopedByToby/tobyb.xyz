import styles from '../styles/Projects.module.scss'
import Head from 'next/head'
import MenuButton from '../components/menuButton'
import Subscribe from '../components/subscribe'

export default function Blog() {
  return (
    <div className={styles.container}>
    <Head>
    <title>Toby B / Blog</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="./icon.png" />
      <meta name="theme-color" content="#fff" />
      <meta property="og:url" content="https://personal-sitev2.vercel.app" />
      <meta property="og:type" content="Personal website." />
      <meta
        property="og:title"
        content="Toby B." />
      <meta name="twitter:card" content="13 y/o full stack web dev & designer." />
      <meta
        property="og:description"
        content="Toby's blog." />
      <meta property="og:image" content={"/banner.png"} />
    </Head>
    <Subscribe />
    <MenuButton />
    <body>

    <h1 className={styles.title}>Blog.</h1>
    <h1 className={styles.subtitle}>My thoughts and feelings about everything tech.</h1>

    <div className={styles.posts}>
    <div className={styles.postTwo}>
    <a href="/blog/favourite-tools">
      <h1>My favourite tools.</h1>
      <p>
        By Toby. &nbsp; 5 minute read.</p>
    </a>
  </div>

  <div className={styles.postOne}>
    <a href="/blog/how-i-built-my-website">
      <h1>How I Built My Website.</h1>
      <p>
        By Toby. &nbsp; 1 minute read.</p>
    </a>
  </div>
</div>

</body>
</div>
    )
}
