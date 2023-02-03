import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {db} from '../../config/firebaseConfig'
import {getDoc,doc} from 'firebase/firestore'
import './articleDetails.css'
import Likes from '../../components/Likes/Likes';
import Comments from '../../components/Comments/Comments';

function ArticleDetails() { 
    const {articleId}=useParams();
    const [article,setArticle]=useState('')

  useEffect(() => {
   const docRef=doc(db,"articles",articleId)
   getDoc(docRef)
   .then(res=>{
    setArticle(res.data())
   })
   .catch(err=>console.log(err))
  }, [])
  



  return (
    <div className="details-container">
        <h1>{article?.title}</h1>
        <h2>{article?.summary}</h2> 
        <div className="details-info-container">
          <p><span className="article-span">Author:</span> {article?.createdBy?.toUpperCase()}</p>
          <p><span className="article-span published">Published:</span> {article?.createdAt?.toDate().toDateString()}</p>
          <Likes articleId={articleId}/>
        </div>
        <div style={{borderBottom:"solid 1px grey",paddingBottom:"10px",marginBottom:"10px"}}>
          <img className="details-image" src={article?.imageUrl}/> 
          <p className="article-description">{article?.paragraphOne}</p>
          <p className="article-description">{article?.paragraphTwo}</p>
          <p className="article-description">{article?.paragraphThree}</p>
        </div>
        <Comments articleId={articleId}/>
    </div>
  )
}

export default ArticleDetails