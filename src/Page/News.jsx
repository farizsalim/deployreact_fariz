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
      .get('https://api-berita-indonesia.vercel.app/antara/terbaru/')
      .then((response) => {
        const filteredNews = response.data.data.posts.filter((posts) =>
        posts.title.toLowerCase().includes(searchs.toLowerCase())
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
        searchNews.map((posts, index) => (
            <div className='col-3 card m-2 p-2' key={index} style={{ width: '18rem' }}>
            <img src={posts.thumbnail} className='news-img' alt='...' />
            <h6 className='publish-text'>{posts.pubDate}</h6>
            <h6 className='publish-text'>Author : Antara News</h6>
            <a href={posts.link} className='title-news' >
                {posts.title}
            </a>
            </div>
        ))
        )}
        
      </div>
    </div>
  );
}

export default News;
