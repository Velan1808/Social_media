import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = ({post, editTitle,   setEditTitle, editPost,  setEditPost,  handleEdit }) => {

    const { id } = useParams();
    const posts = post.find(post => (post.id).toString() === id)

    useEffect(() =>{
        if(posts){
            setEditTitle(posts.Header)
            setEditPost(posts.Post)
        }
    },[posts, setEditTitle, setEditPost])

  return (
    <main className='editPost'> 
       <div style={{fontSize : '24px', marginTop:'-10px', fontWeight :'500'}}> Edit Post</div>
        <form className='Newpost-container'  onSubmit={(e) => e.preventDefault()}>
            <label>Title</label>
            <input
                id='title'
                type='text'
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />

            <label>Comment</label>
            <textarea
                rows={8}
                required
                value={editPost}
                onChange={(e) => setEditPost(e.target.value)}
            >
            
            </textarea>

            <input
            type='submit'
            value="Submit" 
            className='submit'
            onClick={() => handleEdit(posts.id)}
            />

</form>
    </main>
  )
}

export default Editpost