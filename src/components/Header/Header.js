import React,{useEffect} from 'react'
import './header.css'
import { FaHome } from "react-icons/fa";
import {Link,useNavigate} from 'react-router-dom'
import {auth} from '../../config/firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

function Header({categories}) {  

   
    let navigate=useNavigate(); 
    const [user]=useAuthState(auth)

 


  return (
    <div className="header-container">
      <FaHome className="home-icon" onClick={()=>navigate("/")}/>
      {
        user 
        ? <Link className="auth-link" to="/addarticle">Add Article</Link>
        : null
      }



      <div className="categories-container">
        {
          categories.map((item,index)=>{
              return <Link key={index} className="nav-link" to={`/category/${item}`}>{item}</Link>
          })
        }
     </div>
     {
      user 
      ? <div>
         <span className="username">{user?.displayName ?user?.displayName : user?.email }</span>
         <button onClick={()=>signOut(auth)} className="auth-link">Logout</button>
      </div>
      : <Link className="auth-link" to={`/auth`}>Signup</Link>
     }
      
      
    </div>

  )
}

export default Header