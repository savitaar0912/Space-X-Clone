import React, { useState, useEffect } from 'react';
import '../css/Ships.css';

export default function Ships(props) {
    const [articles, setArticles] = useState([]);

    const updateNews = async () => {
        try {
            const response = await fetch('https://api.spacexdata.com/v3/ships');
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
        <div className='ship'>
            {articles.map((article) => (
                <div key={article.ship_id} className="card" style={{ width: '18rem' }}>
                    <img src={article.image ? article.image : "https://imgur.com/NHsx95l.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{article.ship_name}</h3>
                        <p className="card-text">{article.home_port}</p>
                        <a href={article.url} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            ))}
        </div>
    );
}
