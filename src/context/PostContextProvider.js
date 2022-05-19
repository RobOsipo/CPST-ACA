import React, {useEffect, useState} from 'react'
import PostContext from './post-context'

const PostContextProvider = ({ children }) => {
const [posts, setPosts] = useState([])
const [postsLength, setPostsLength] = useState(0)

    // ! REST implementation
    useEffect(() => {
        fetch('http://localhost:5000/feed/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .then(err => console.log('errors fetching post', err))
    }, [posts])

    // ! GraphQL implementation
    // const graphqlQueryFetchPosts = {
    //     query: `query {
    //         posts {
    //           posts {
    //             _id,
    //             title,
    //             content,
    //             imageUrl,
    //           }
    //         }
    //       }`
    // }

    // useEffect(() => {
    //     fetch('http://localhost/5000/graphql', {
    //         body: JSON.stringify(graphqlQueryFetchPosts), 
    //     headers: {                                    
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
                // setPosts(data.posts)
    //     })
    // }, [posts])

  return (
    <PostContext.Provider value={posts}>
        {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider