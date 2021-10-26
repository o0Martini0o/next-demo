import { Layout } from '../../src/component/Layout'
import { Date } from '../../src/component/Date'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../src/lib/posts'
import utilStyles from '../../src/styles/utils.module.css'

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData }) => {
  return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date}/>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
        </article>
      </Layout>
  )
}
export default Post

