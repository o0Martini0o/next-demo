import Head from 'next/head'
import { Layout, siteTitle } from '../src/component/Layout'
import utilStyles from '../src/styles/utils.module.css'
import { getSortedPostsData } from '../src/lib/posts'
import Link from 'next/link'
import { Date } from '../src/component/Date'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
            ))}
          </ul>
          <p>My Next.js Demo Project For Blog</p>
        </section>
      </Layout>
  )
}
