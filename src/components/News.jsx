import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const API = "62cb71db5cbb4137b37fbca2a4706bbc";
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=keyword&apiKey=${API}`
      );
      const data = await response.json();
      console.log(data);
      setNews(data.articles);
    };
    fetchNews();
  }, []);

  return (
    <div className="container mt-5">
      {news.map((article, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p className="card-text">{article.description}</p>
            <button className="btn btn-primary" onClick={() => fetchNews()}>
              fetch
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
