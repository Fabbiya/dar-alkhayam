import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import catHeader from "./../../resources/post/catHeader.png";
import sanityClient from "../../client.js";
import { Col, Container, Row, Table, Spinner } from "react-bootstrap";
import Moment from "moment";
import { toHTML } from "@portabletext/to-html";
import SectionPosts from "../../components/SectionPosts/SectionPosts";
import './Post.css'

export default function Post() {
  const [postData, setData] = useState(null);
  const slug = useParams();
  console.log("slug", slug.slug);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug.slug]{
            title,
            subtitle,
            slug,
            "authorName":author->name,
            "authorImg":author->image.asset->url,
            publishedAt,
            body[],
            "imgUrl":mainImage.asset->url,
            specification[]
          }`,
        { slug }
      )
      .then((data) => {
        setData(data[0]);
      })
      .catch(console.error);
  }, [slug]);
  if (!postData)
    return (
      <div
        className="text-center bg-light d-flex align-items-center justify-content-center"
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          left: "0px",
          top: "0px",
          zIndex: "9999",
        }}
      >
        <div className="">
          <Spinner animation="border" variant="primary" /> <p>Loading....</p>
        </div>
      </div>
    );

  return (
    <Container>
      <div>
        <img
          src={catHeader}
          style={{position:"absolute", left:"0px", top:"0px", maxHeight:"46vh", width:"100%", zIndex:"-1"}} alt="main page bg" className="bg-post"
        />
        <Container className="pt-5 px-0">
          <Row className="mx-0">
            <Col lg={6} className="h-100  px-0">
              <div className="pb-5 text-light">
                <h1>
                  <b>{postData.title}</b>
                </h1>
                <p>{postData.subtitle}</p>

                <i class="fa-solid fa-circle-arrow-down fa-4x text-primary py-5 mt-5"></i>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: toHTML(postData.body) }}
              ></div>
            </Col>
            <Col lg={6} className="ms-0 px-0 ">
              <img
                src={postData.imgUrl}
                alt={postData.title}
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{ backgroundColor: "#FAFAFA" }} className="py-5 px-3">
        {postData?.specification && (
          <div className="mt-5">
            <h5>Specifications</h5>
            <Table>
              <tbody>
                {postData.specification.map((s, index) => (
                  <tr>
                    <td>{s.title}</td>
                    <td>{s.data}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
      <Container style={{ backgroundColor: "#FFEAE8" }}>
        <div className="py-3">
          <h5 className="text-center">
            <b>RELATED ARTICLES</b>
          </h5>
          <SectionPosts />
        </div>
      </Container>
    </Container>
  );
}
