import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {db} from '../../config/firebaseConfig'
import {getDocs,collection,query,limit,where} from 'firebase/firestore'
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import './categoryArticles.css'

function CategoryArticles() {

    const {categoryName}=useParams()
    const [articles,setArticles]=useState([])

useEffect(() => {
  const articleRef = collection(db,"articles") 
  const q = query(articleRef,where("category","==",categoryName))
  getDocs(q,articleRef)
  .then(res=>{
    const articles = res.docs.map(item=>({
        id:item.id,
        ...item.data() //spread operator
    }))
   setArticles(articles)

 })
 .catch(err=>console.log(err))
}, [categoryName])


  return (
    <div className="category-articles">
        {
          articles?.map(item=>{
            return <ArticleCard key={item.id} article={item}/>
          })
        } 
    </div>
  )
}

export default CategoryArticles