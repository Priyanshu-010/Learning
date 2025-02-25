import React from 'react'

const BlogList = ({ blogs, handleDelete}) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div className="id" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>created by {blog.author}</p>
          <button onClick={() =>handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default BlogList