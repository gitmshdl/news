import React from "react";
import { Card, Col } from "react-bootstrap";
import classes from "./NewsItem.module.css";
import baseImage from "../assets/newsImage.jpg";

function NewsItem({ title, author, image, url }) {
  return (
    <Col xs={12} sm={6} md={3} className="d-flex justify-content-center my-2">
      <Card className={classes.card}>
        <Card.Img variant="top" src={image !== null ? image : baseImage} />
        <Card.Body className={classes.cardBody}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.btn} btn`}
          >
            Read More
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default NewsItem;
