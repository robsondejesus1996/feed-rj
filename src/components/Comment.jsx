import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/robsondejesus1996.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContet}>
            <header>

                <div className={styles.authorAndTime}>
                    <strong>Robson de Jesus</strong>
                    <time title='27 de dezembro às 14:00' dateTime='2023-12-27 14:55'>Cerca de 1h atras</time>
                </div>

                <button title="Deletar comentário">
                    <Trash size={20}/>
                </button>
            </header>

            <p>Muito Bom Robson, parabens </p>
        </div>

        <footer>
           <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
           </button>
        </footer>
      </div>
    </div>
  );
}
