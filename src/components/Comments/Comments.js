import React,{useState,useEffect} from 'react'
import {auth,db} from '../../config/firebaseConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Timestamp,addDoc,collection,onSnapshot,deleteDoc,doc,query,where} from 'firebase/firestore'
import './comments.css'
import { toast } from "react-toastify";

function Comments({articleId}) {

const [newComment,setNewComment]=useState('')
const [user]=useAuthState(auth)
const [comments,setComments]=useState([])

useEffect(() => {
  const commentsRef=collection(db,'comments')
  const q = query(commentsRef,where("articleId","==",articleId))
  onSnapshot(q,(snapshot)=>{
    const comments = snapshot.docs.map(item=>({
        id:item.id,
        ...item.data()
    }))
    setComments(comments)
  })
}, [])


const addNewComment=(e)=>{
    e.preventDefault();
    const commentsRef=collection(db,'comments')
    addDoc(commentsRef,{
        userId:user?.uid,
        articleId:articleId,
        content:newComment,
        userName:user?.displayName
    })
    .then(res=>{
        setNewComment('')
    })
    .catch(err=>{
        console.log(err)
    })
}

const deleteComment=(id)=>{
   deleteDoc(doc(db,"comments",id))
   .then(res=>{
    toast('Deleted successfully',{type:"success",autoClose: 500})
   })
   .catch(err=>{
    console.log(err)
   })

}

  return ( 
    <div className="comments-container">
        {
            comments?.map(item=>{
                return <div className="comment" key={item.id}>
                          <p className="comment-author">{item.userName}</p>
                          <p>{item.content}</p>
                          {
                            user?.uid === item.userId
                            ? <button onClick={()=>deleteComment(item.id)}>Delete</button>
                            : null
                          }
                       </div>
            })
        }
        {
            user  
            ? <form onSubmit={addNewComment}>
                    <input
                    value={newComment}
                    type="text"
                    placeholder="Add a comment"
                    onChange={(e)=>setNewComment(e.target.value)}
                    />
                    <button type="submit">Add Comment</button>
            </form>
           : <p>Please login to comment</p>
        }


    </div>
  )
}

export default Comments