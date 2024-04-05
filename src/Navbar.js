import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = ({searchPost,setSearchPost}) => {
  return (
    <nav className='Navbar'>
       <div className='Navbar-header'>
         <h1>Social Media</h1>
       </div>
      
    <div className='Navbar-list'>    
        
            <input 
               id='search'
               type='text'
               placeholder='Search Post'
               value={searchPost}
               onChange={(e) => setSearchPost( e.target.value)}
            />
             <ul>
               <li><Link to='/' className='item'>Home</Link></li>
               <li><Link to='/post' className='item'>Post</Link></li>
               <li><Link to='/contact' className='item'>Contct</Link></li>
           </ul>
   </div>
    </nav>
  )
}

export default Navbar