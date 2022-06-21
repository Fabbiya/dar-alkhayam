import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import sanityClient from "./../../client";
import { Link } from "react-router-dom";
import Moment from "moment";

export default function SectionPosts() {
    const [allData, setData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        subtitle,
        slug,
        description,
        "imgUrl": mainImage.asset->url,
        publishedAt,
        "insideImgUrl":insideimg.asset->url
      }`
      )
      .then((data) => {
        setData(data);
        console.log("data", data);
      })
      .catch(console.error);
  }, []);
  return (
    <Container className="py-3 my-5">
        <Row>
            {allData && allData.map((post, index) => (
                <Col lg={4} >
                    <Card className="h-100">
                        <img src={post.imgUrl} className="card-img img-fluid" alt={post.title}/>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className="text-muted"><small>{post.subtitle}</small></Card.Subtitle>
                            <Link to={`/post/${post.slug.current}`} key={post.slug.current} className="btn btn-primary w-100 text-light mt-2">
                                Show More
                            </Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <small>Published at {Moment(post.publishedAt).format(
                                "DD MMM YYYY"
                              )}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))
            
            }
        </Row>
    </Container>
  )
}
