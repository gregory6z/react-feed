import styles from "./Post.module.css";

import igniteLogo from "../assets/ignite-logo.svg";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/gregory6z.png" />
          <div className={styles.authorInfo}>
            <strong>Gregory Praxedes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 mai à 08h13" dateTime="2022-5-11 08:13:30">
          posté il y a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          {" "}
          <a href="#">#novoprojeto</a>
          <a href="#"> #rocketseat</a>
          <a href="#">#nlw</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Laissez votre feedback</strong>

        <textarea placeholder="laissez un commentaire" />
        <footer>
          <button type="submit">Commentaire</button>
        </footer>
        <div></div>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
