import Head from 'next/head';
import Layout from '../../components/layout';
import { getPostData } from '../../lib/posts';
import getAllPostsIds from './../../lib/getAllPostsIds';
import Date from '../../components/Date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
	const paths = getAllPostsIds();
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h3 className={utilStyles.headingXl}>👉 {postData.title}</h3>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}
