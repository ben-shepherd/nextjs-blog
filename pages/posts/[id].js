import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';
import Head from "next/head";

export default function Post({ postData }) {
    console.log(postData)
    const {
        title,
        id,
        date
    } = postData
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
            <h1 className={utilStyles.headingXl}>{title}</h1>

            <div className={utilStyles.lightText}>
                <Date dateString={date} />
            </div>

            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}