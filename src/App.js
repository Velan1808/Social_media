import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import Navbar from './Navbar'
import { useEffect, useState } from 'react';
import Post from './Post';
import Contact from './Contact';
import Postpage from './Postpage';
import Missing from './Missing';
import Editpost from './Editpost';
import api from './api/posts'



function App() {
  const [post, setPost]=useState([])
  const[searchPost, setSearchPost]=useState('')
  const [addTitle, setAddTitle]=useState([])
  const [addPost, setAddPost]=useState([])
  const [editTitle, setEditTitle]=useState([])
  const [editPost, setEditPost]=useState([])
  const navigate = useNavigate()

useEffect(() =>{
   const fetchPost = async() =>{
      try{
        const response = await api.get('/post');
        const PostList = response.data;
        setPost(PostList);
      }
     catch(err){
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.message);
      }
      else{
        console.log(err.message)
      }
     }
  }
  fetchPost();
},[])

const handleSubmit = async (e) =>{
    e.preventDefault();
    const id  = post.length ? parseInt(post[post.length -1].id) + 1 : 1;
    const d = new Date();
    const date= d.getDate() + "/" + d.getMonth()  + "/" + d.getFullYear();
    const Header =addTitle;
    const Post = addPost;
    const Newpost ={id, Header, date, Post};
    try{
      const response = await api.post('/post', Newpost);
      const ListNewpost=[...post, response.data];
      setPost(ListNewpost);
      setAddTitle('');
      setAddPost('');
      navigate('/')
    }
    catch(err){
        console.log(err.message)
      }  
}

const handleEdit = async (id) =>{
    const d = new Date();
    const date= d.getDate() + "/" + d.getMonth()  + "/" + d.getFullYear();
    const Header =editTitle;
    const Post = editPost;
    const Newpost ={id, Header, date, Post};
    try{
      const response = await api.put(`post/${id}`, Newpost);
      setPost(post.map(post => post.id===id ? {...response.data} : post ));
      setAddTitle('');
      setAddPost('');
      navigate('/')
    }
    catch(err){
        console.log(err.message)
      }  
}

const handleDelete = async (id) =>{
  try{
      await api.delete(`post/${id}`);
      const PostList = post.filter((post) => post.id !== id);
      setPost(PostList);
      navigate('/')
   }
   catch(err){
    console.log(err.message)
  }
 
}

  return (
    <div className="App">
      <Navbar searchPost={searchPost} setSearchPost={setSearchPost} />
      <Routes>

            <Route path='/' element={<Header
                post= {post.filter(post => (post.Header.toLowerCase().includes(searchPost.toLowerCase())) || (post.Post.toLowerCase().includes(searchPost.toLowerCase()))
                  )}
                 key={post.id}  />}  
           />

            <Route path='post/'>
                <Route index element=
                {<Post 
                    addPost={addPost} 
                    setAddPost={setAddPost}
                    addTitle={addTitle}
                    setAddTitle={setAddTitle}
                    handleSubmit={handleSubmit}
                    />} />
                <Route path=':id' element={<Postpage
                  post = {post}
                  handleDelete = {handleDelete}
                />}/>

            </Route>

            <Route path='/edit/:id' element={<Editpost
                 post = {post}
                 editTitle = {editTitle}
                 setEditTitle = {setEditTitle}
                 editPost = {editPost}
                 setEditPost = {setEditPost}
                 handleEdit = {handleEdit}
                
                />} />

            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Missing />} />

        </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
