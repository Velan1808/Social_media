import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({post}) => {
  return (
      <> 
      {post &&
        <ul className='Post'>
            {post.map((post)=>(     

              <li className='Post-list'>
                <Link to ={`post/${post.id}`} className='postLink'>
                <label className='Post-head'>{post.Header}</label> </Link>
                <br></br>
                <label className='Post-date'>{post.date}</label>
                
                <br></br>
                <p className='Post-comment' >{(post.Post).slice(0,30)}...</p>
              </li>
            ))}
        </ul>
       }
       {!post &&
        <>
         <h1 className='Nopost'>No Post Availble...!</h1>
        </>
       
       }
      </>
  )
}

export default Header