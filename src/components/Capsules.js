import React, { useState, useEffect } from 'react';
import '../css/Capsule.css';

export default function Capsules(props) {
  const [articles, setArticles] = useState([]);

  const updateNews = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/capsules');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching capsule data:', error);
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <h1 className='heading'>Details</h1>
      <div className='capsule'>
        {articles.map((article) => (
          <div key={article.rocket_id} className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h2 className="card-title">{article.capsule_serial}</h2>
              <p className="card-text">{article.original_launch}</p>
              <p className="card-text ellipsis">{article.details  ? article.details : "No Data"}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
