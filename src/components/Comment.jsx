import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment () {
  return(
<div className={styles.comment}>
  <Avatar hasBorder={false} src="https://github.com/Lwozinho.png" />

  <div className={styles.commentBox}>
    <div className={styles.commentContent}>
    <header>
      <div className={styles.authorAndTime}>
        <strong>Leonardo Nascimento</strong>
        <time title='23 de maio ás 18:28h' dateTime="2024-23-05 18:28:45">Publicado há 1h </time>
      </div>

      <button title="Deletar comentário">
        <Trash size={24}/>
      </button>
    </header>

    <p>Muito bom Devon, parabéns!!</p>
    </div>

    <footer>
      <button>
        <ThumbsUp/>
        Aplaudir <span>20</span>
      </button>
    </footer>

  </div>
</div>
  )
}