import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import industrialMachines from "./../../resources/serviceItems/images/IndustrialMachinaries.png";
import electronics from "./../../resources/serviceItems/images/electronics.png";
import food from "./../../resources/serviceItems/images/food.png";
import sanityClient from "./../../client";
import { Link } from "react-router-dom";

export default function SectionCategories() {
  const [allCategories, setAllCategories] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]{
        title,
        subtitle,
        slug,
        description,
        "imgUrl": img.asset->url,
        publishedAt,
        "insideImgUrl":insideimg.asset->url
      }`
      )
      .then((data) => {
        setAllCategories(data);
        console.log("data", data);
      })
      .catch(console.error);
  }, []);

  return (
    <Container className="py-3 my-5 px-5">
      <Row className="justify-content-center">
        {allCategories &&
          allCategories.map((cat, index) => (
            <Col lg={3}>
              <Link to={`/category/${cat.slug.current}`} key={cat.slug.current}>
                <Card>
                  <img
                    src={cat.imgUrl}
                    className="card-img img-fluid"
                    alt="machines"
                  />
                  <div className="card-img-overlay text-center d-flex">
                    <div className="align-self-center mx-auto">
                      <h4 className="text-light mt-2 ">
                        <b className="text-upercase">{cat.title}</b>
                      </h4>
                      <p className="text-light mt-2">{cat.subtitle}</p>
                      <Button variant="outline-light " className="mt-3">
                        Get Free Quote
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
