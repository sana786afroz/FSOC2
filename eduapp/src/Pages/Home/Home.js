import React from 'react'
import style from './Home.module.css'
import Cards from '../../Components/Cards/Cards'
export default function Home(){
  return (
    <div>
   
      <img className={style.img1} src='https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=1&iptc=1' alt='edupic'/>
      <Cards/>
    </div>
  )
}

