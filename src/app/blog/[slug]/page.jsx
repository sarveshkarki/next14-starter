import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const SingleBlogPost = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <>
      <div className={styles.container}>
        {post?.img && (
          <div className={styles.imgContainer}>
            <Image src={post?.img} alt="postImg" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.detail}>
            {post && (
              <Suspense fallback={<div>Loading....</div>}>
                <PostUser userId={post.id} />
              </Suspense>
            )}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>12.12.2024</span>
            </div>
          </div>
          <div className={styles.content}>{post?.desc}</div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPost;
