import {Post} from './Post'
import { Header } from './components/Header'

import './styles.css'

export function App() {

  return (
    <>

     <Header/>
     <Post 
      author="Robson de Jesus" 
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam vero commodi ad optio laudantium saepe recusandae perferendis corporis. Magnam, facilis."
     />


    <Post 
      author="Fernanda de souza" 
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam vero commodi ad optio laudantium saepe recusandae perferendis corporis. Magnam, facilis."
     />
    </>
  )
}

