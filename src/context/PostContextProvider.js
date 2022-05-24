import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import PostContext from "./post-context";

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const loginFlag = useSelector(state => state.flag)
 

  // ! REST implementation
  useEffect(() => {
    fetch("http://localhost:5000/feed/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data)
      })
      .catch((err) => console.log("errors fetching post", err));
  }, [loginFlag]);

  // ! GraphQL implementation
//       const graphqlQueryFetchPosts = {
//           query: `{
//               posts {
//                 posts {
//                   _id,
//                   title,
//                   content,
//                   imageUrl,
//                   createdAt
//                 }
//               }
//             }`
//       }
//   console.log(posts)
//       useEffect(() => {
//           fetch('http://localhost/5000/graphql')
//           .then(response => response.json())
//           .then(data => {
//                   setPosts(data.posts)
//           })
//           .catch(err => console.log(err))
//       }, [loginFlag])

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
