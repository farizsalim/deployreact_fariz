import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles/news.scss"

const News = () => {
  const [searchs, setsearchs] = useState('');
  const [searchNews, setSearchNews] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const showLoading = () =>{
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }

    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1b9f902748d64ba1979954419097ebd7')
      .then((response) => {
        const filteredNews = response.data.articles.filter((article) =>
        article.title.toLowerCase().includes(searchs.toLowerCase())
        );
        setLoading(true)
        setSearchNews(filteredNews);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      showLoading();
  }, [searchs]);

  return (
    <div className='container'>
      <h1 className='text-center headertext'>News</h1>
      <div className='row d-flex justify-content-center'>
        <div className="input-group mb-3 d-flex justify-content-center">
            <input type="text" className="form-control" placeholder="Search" value={searchs} onChange={(e) => setsearchs(e.target.value)}/>
        </div>
        {loading ? (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        ) : searchNews.length === 0 ? (
        <p className='text-center headertext'>News Not Found</p>
        ) : (
        searchNews.map((article, index) => (
            <div className='col-3 card m-2 p-2' key={index} style={{ width: '18rem' }}>
            <img src={article.urlToImage} className='news-img' alt='...' />
            <h6 className='publish-text'>{article.publishedAt}</h6>
            <h6 className='publish-text'>Author : {article.author}</h6>
            <a href={article.url} className='title-news' >
                {article.title}
            </a>
            </div>
        ))
        )}
        
      </div>
    </div>
  );
}

export default News;
