import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import CoverImage from '../../components/cover-image';
import Date from '../../components/date'
import { getAllPostsWithSlug, getSinglePostBySlug } from '../../services/graphcms'
import styles from "../../styles/Post.module.css"
type PostProps = {
  post: {
    title: string,
    publishedAt: string,
    tags: Array<any>,
    slug: string,
    excerpt: string,
    coverImage: {
      url: string
    }
    content: {
      html: any
    }
  }
}

const Post: NextPage<PostProps> = ({post}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postHeader}>
        <div className={styles.postTitle}>
          <h2 className="title">{ post.title }</h2>
          <p>{ post.excerpt }</p>
          <Date dateString={post.publishedAt} />
        </div>
        <div className={styles.postImage}>
          <CoverImage slug={post.slug} title={post.title} url={post.coverImage.url} />
        </div>
      </div>
      
      <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params) {
    return {props: {post: {}}}
  }
  const post = await getSinglePostBySlug(params.slug as string);
  console.log(post.content);
  return {props: {post}}
}

export default Post;