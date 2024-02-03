import { getUser } from "@/lib/data";
import Image from "next/image";

import styles from "./postUser.module.css";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  console.log(user);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={40}
        height={40}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
