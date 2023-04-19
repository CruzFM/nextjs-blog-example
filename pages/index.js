import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from "../styles/utils.module.css";
import Link from 'next/link';

export default function Home() {
  return (
   <Layout home>
    <Head>
      <title> {siteTitle} </title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>Front End developer</p>
      <p>(This is a sample website, I'll be building a site like this or 
        <a href='https://nextjs.org/learn'>Next.js tutorial</a>)
      </p>
    </section>
   </Layout>
  )
}
