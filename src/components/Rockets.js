import React, { useState, useEffect } from 'react';
import '../css/Rockets.css'

export default function Rockets(props) {
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/rockets');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching rocket data:', error);
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <div className='rocket'>
      {articles.map((article) => (
        <div key={article.rocket_id} className="card" style={{ width: '18rem' }}>
          <img src={article.flickr_images[0]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">{article.rocket_name}</h2>
            <p className="card-text">{article.description.slice(0,100) + "........"}</p>
            <a href={article.wikipedia} className="btn btn-primary">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
}
