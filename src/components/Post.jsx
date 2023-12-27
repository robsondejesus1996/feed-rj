import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/robsondejesus1996.png" />
                    <div className={styles.authorInfo}>
                        <strong>Robson de Jesus</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>
                <time title='27 de dezembro às 14:00' dateTime='2023-12-27 14:55'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p> Fala galeraa 👋</p>
            <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p> 👉 <a href=''>jane.design/doctorcare</a></p>
            <p>  <a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}