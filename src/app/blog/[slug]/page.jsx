import Image from "next/image";
import styles from "./singlePost.module.css";

const SingleBlogPost = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20631973/pexels-photo-20631973/free-photo-of-a-vase-with-dried-flowers-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="postImg"
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image
              src="https://images.pexels.com/photos/20631973/pexels-photo-20631973/free-photo-of-a-vase-with-dried-flowers-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="postImg"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Gundrukmasyaura</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae suscipit quo mollitia odit tempora veritatis, quia nisi
            accusantium eligendi quos quisquam veniam excepturi. Ipsum
            voluptates quaerat modi! Consequuntur, consequatur eveniet!
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPost;
