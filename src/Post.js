import React from 'react'

const Post = ({addPost, setAddPost, addTitle, setAddTitle, handleSubmit} ) => {
    return (
  
        <main className='Newpost'>
          <form className='Newpost-container'  onSubmit={(e) => handleSubmit(e)}>

              <label>Title</label>
              <input
              id='title'
              type='text'
              required
              value={addTitle}
              onChange={(e) => setAddTitle(e.target.value)}
              />

              <label>Comment</label>
              <textarea
                 rows={8}
                 value={addPost}
                 onChange={(e) => setAddPost(e.target.value)}
                 >
                
               </textarea>

             <input
              type='submit'
              value="Post" 
              className='submit'
              />

          </form>

        </main>
    )
  }

export default Post