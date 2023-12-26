import { Post } from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'


export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Robson de Jesus"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptatum delectus sequi recusandae fugit adipisci unde enim praesentium labore quae."
          />

          <Post
            author="Robson de Jesus"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptatum delectus sequi recusandae fugit adipisci unde enim praesentium labore quae."
          />

        </main>
      </div>



    </div>
  )
}

