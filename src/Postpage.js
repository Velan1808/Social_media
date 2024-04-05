import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Postpage = ({post, handleDelete}) => {
  
  const { id } = useParams();
  const posts = post.find(post => (post.id).toString() === id)

  return (
    <main className='Postpage'>
      <article className='Postpage-1'>
        
            {posts &&
            <>
                <h2>{posts.Header}</h2>
                <p className='postDate'>{posts.date}</p>
                <p className='postComment'>{posts.Post}</p>
                <button onClick={() => handleDelete(posts.id)} className='Deletepost'>
                    Delete Post
                </button>
                <Link to ={`/edit/${posts.id}`}>
                    <button className='Editpost'>
                      Edt
                    </button>
                </Link>
               </>
            }
            {!posts &&
               <>
               <h2>No Posts</h2>
                <p className='postComment'>Go Back To Home</p></>
            }
      </article>
        
    </main>
  )
}

export default Postpage