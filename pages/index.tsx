import Head from 'next/head'
import { Layout, siteTitle } from '../src/component/Layout'
import utilStyles from '../src/styles/utils.module.css'
import { getSortedPostsData } from '../src/lib/posts'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
            ))}
          </ul>
          <p>[My Introduce]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  )
}
