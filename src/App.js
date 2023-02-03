import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import CategoryArticles from './pages/CategoryArticles/CategoryArticles';
import Auth from './pages/Auth/Auth';
import AddArticle from './pages/AddArticle/AddArticle';
import ArticleDetails from './pages/ArticleDetails/ArticleDetails';
 
function App() { 

  const categories = ["Health","Food","Travel","Technology"];
   
  return (
    <BrowserRouter>  
     <Header categories={categories}/>
     <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/category/:categoryName" element={<CategoryArticles />}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/addarticle" element={<AddArticle categories={categories}/>} />
        <Route path="/article/:articleId" element={<ArticleDetails/>}/>
     </Routes>
    </BrowserRouter>  
  );
}

export default App;
