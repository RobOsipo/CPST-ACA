import React, {useEffect} from 'react'
import PostContext from './post-context'

const PostContextProvider = ({ children }) => {
const [posts, setPosts] = React.useState('')

    useEffect(() => {
        fetch('http://localhost:5000/feed/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .then(err => console.log('errors fetching post', err))
    }, [])

    console.log('Posts', posts)
  return (
    <PostContext.Provider value={posts}>
        {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider