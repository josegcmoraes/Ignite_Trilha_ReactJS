import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../componentes/SubscribeButton';
import { stripe } from '../services/stripe';


import styles from './home.module.scss';


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  console.log(product)
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceID={product.priceId} />

        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />

      </main>

    </>
  )
}


// export const getServerSideProps: GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {
  console.log('oke');
  const price = await stripe.prices.retrieve('price_1JQMitILJm0pnQrF30Ype2NT', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }


  console.log(price);

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 horas
  }
}
