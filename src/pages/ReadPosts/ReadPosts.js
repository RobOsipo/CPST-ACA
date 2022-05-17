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
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2Ff%2Fe%2F519365-large-japanese-scenery-wallpaper-2048x1401.jpg&f=1&nofb=1",
            "createdBy": "Rob",
            "__v": 0
        },
        {
            "_id": "6280467ab6343aa13b43d3c1",
            "title": "test2",
            "content": "Heres some more content brahhh",
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2Ff%2Fe%2F519365-large-japanese-scenery-wallpaper-2048x1401.jpg&f=1&nofb=1",
            "createdBy": "Rob",
            "__v": 0
        },
        {
            "_id": "628049838442eddc684dc318",
            "title": "test3",
            "content": "Heres some more content brahhhhh",
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2Ff%2Fe%2F519365-large-japanese-scenery-wallpaper-2048x1401.jpg&f=1&nofb=1",
            "createdBy": "Rob",
            "__v": 0
        }, 
        {
            "_id": "628045dcb6343aa13b43d3b",
            "title": "test",
            "content": "Heres some more content brahhh",
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2Ff%2Fe%2F519365-large-japanese-scenery-wallpaper-2048x1401.jpg&f=1&nofb=1",
            "createdBy": "Rob",
            "__v": 0
        },
        {
            "_id": "6280467ab6343aa13b43d3c",
            "title": "test2",
            "content": "Heres some more content brahhh",
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2Ff%2Fe%2F519365-large-japanese-scenery-wallpaper-2048x1401.jpg&f=1&nofb=1",
            "createdBy": "Rob",
            "__v": 0
        },
        {
            "_id": "628049838442eddc684dc31",
            "title": "test3",
            "content": "Heres some more content brahhhhh",
            "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2Ff%2Fe%2F519365-large-japanese-scenery-wallpaper-2048x1401.jpg&f=1&nofb=1",
            "createdBy": "Rob",
            "__v": 0
        }
    ]

  return (
      <>
    <MainNavigation />
    <div className={classes['main-container']}>
        <ul className={classes.list}>
            {DUMMY.map((post) => {
                return <BlogItem key={post._id} imageUrl={post.imageUrl} createdBy={post.createdBy} title={post.title} content={post.content} />
            })}
        </ul>
    </div>

      </>
  )
}

export default ReadPosts