import { Avatar } from './Avatar';

import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props){

    console.log(props)
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/robsondejesus1996.png" />
                    <div className={styles.authorInfo}>
                        <strong>Robson de Jesus</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>
                <time title='27 de dezembro às 14:00' dateTime='2023-12-27 14:55'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                 placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}