import Head from 'next/head';
import { SubscribeButton } from '../componentes/SubscribeButton';


import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>

        <title>Home | Ig.News</title>

      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span><br />React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
          {/* <h1 className={styles.title}>
            Desc
            <span> Ig.News </span>
            2021
          </h1> */}
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />

      </main>


    </>
  )
}
