import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';


// author: {avatar_url: "", name:"", role: ""}
// publishedAt: Date
// content: String

export function Post({author, publishedAt, content }) {
  const [comments, setComments] = useState([
    1,
    2,
  ]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",
   {locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, comments.length + 1]);
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
           {publishedDateRelativeToNow}
          </time>
      </header>

      <div className={styles.content}>
       {content.map(line => {
        if (line.type === 'paragraph') {
          return <p>{line.content}</p>;
        } else if (line.type ==='link') {
          return <p><a href="#">{line.content}</a></p>
        }
       })}
      </div>

      <form OnSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

          <textarea
            placeholder='Deixe um comentário'
          />

          <footer>
            <button type='submit'>Comentar</button>
         </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment/>
        })}  
      </div>
    </article>
    )
}