import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Container, Row } from "react-bootstrap";
import { FaCanadianMapleLeaf } from "react-icons/fa";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=ca&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);
  console.log(articles);
  return (
    <div>
      <h1 className="text-center mt-3">
        Lastest <span className="badge bg-danger">News</span> Canada{" "}
        <FaCanadianMapleLeaf className="text-danger" />
      </h1>
      <Container>
        <Row>
          {articles.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title}
              author={article.author}
              image={article.urlToImage}
              url={article.url}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NewsBoard;
