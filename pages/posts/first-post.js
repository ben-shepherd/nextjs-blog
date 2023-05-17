import Link from 'next/link';
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
const FirstPost = (props) => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>

            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy='lazyOnload'
                onLoad={() => console.log('script loaded. window.FB has been populated')}
                />

            <h1>First Post</h1>
            <Link href="/">Back to home</Link>
        </Layout>
    )
}

export default FirstPost;