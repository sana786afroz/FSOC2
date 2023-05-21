import React from 'react'
import style from './Header.module.css'
export default function Header(){
  return (
    < >    
      
      <div className={style.links}>
      <span style={{marginLeft:"-2rem"}}><img className={style.logo} src='https://i.pinimg.com/474x/66/64/06/666406c35dcf8b86e52c997b04f61bbc.jpg' alt='logo'/></span>
      <a href='/'>Home</a>
      <a href='/'>Cources</a>
      <a href='/'>AboutUs</a>
      <a href='/'>Blogs</a>
      <a href='/'>Contacts</a>
      <a href='/login'>Login</a>
      <a href='/register'>SignUp</a>
      
      </div>
    
    </>
  )
}


