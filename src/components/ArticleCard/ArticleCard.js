import React from 'react'
import { Link } from 'react-router-dom';
import './articleCard.css'

function ArticleCard({article}) {
  return (
    <div className="article-card">
        <img src={article?.imageUrl} alt="article"/>
        <div className="article-card-info">
            <p>{article?.title}</p> 
            <Link to={`/article/${article?.id}`}>Read</Link>
        </div>
    </div>
  )
}

export default ArticleCard