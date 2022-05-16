import React from 'react'

import BlogItem from './Components/BlogItem/BlogItem'
import MainNavigation from '../../SharedComponents/MainNavigation/MainNavigation'
import classes from './ReadPosts.module.scss'

const ReadPosts = () => {
   const DUMMY = [
        {
            "_id": "628045dcb6343aa13b43d3bd",
            "title": "test",
            "content": "Heres some more content brahhh",
            "__v": 0
        },
        {
            "_id": "6280467ab6343aa13b43d3c1",
            "title": "test2",
            "content": "Heres some more content brahhh",
            "__v": 0
        },
        {
            "_id": "628049838442eddc684dc318",
            "title": "test3",
            "content": "Heres some more content brahhhhh",
            "__v": 0
        }, 
        {
            "_id": "628045dcb6343aa13b43d3b",
            "title": "test",
            "content": "Heres some more content brahhh",
            "__v": 0
        },
        {
            "_id": "6280467ab6343aa13b43d3c",
            "title": "test2",
            "content": "Heres some more content brahhh",
            "__v": 0
        },
        {
            "_id": "628049838442eddc684dc31",
            "title": "test3",
            "content": "Heres some more content brahhhhh",
            "__v": 0
        }
    ]

    const mapPosts = () => {
    
    }
  return (
      <>
    <MainNavigation />
    <div className={classes['main-container']}>
        <ul className={classes.list}>
            {DUMMY.map((post) => {
                return <BlogItem key={post._id} title={post.title} content={post.content} />
            })}
        </ul>
    </div>

      </>
  )
}

export default ReadPosts