import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogList from './BlogList'

function App() {
  const [blog, setBlog] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id)=>{
    const newblogs = blog.filter(blog =>blog.id!==id)
    setBlog(newblogs)
  }
  return (
    <div>
      <BlogList blogs= {blog} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
