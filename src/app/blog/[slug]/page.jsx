import Image from "next/image";
import styles from "./postPage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/9316207/pexels-photo-9316207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/9316207/pexels-photo-9316207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          inventore exercitationem commodi rerum nostrum eveniet debitis ipsa
          cumque necessitatibus! Officia cumque optio ullam perferendis itaque
          impedit, hic similique aspernatur mollitia velit enim laborum facilis
          tempore vero minus non. Accusamus, repellendus?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
