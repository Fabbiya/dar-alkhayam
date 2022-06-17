import React, { useState, useEffect } from "react";

import Menu from "../../components/Menu/Menu";
import { useParams } from "react-router-dom";
import catHeader from "./../../resources/post/catHeader.png";
import sanityClient from "../../client.js";
import { Col, Container, Row, Table } from "react-bootstrap";
import TopBar from "../../components/TopBar/TopBar";
import Moment from "moment";
import {toHTML} from '@portabletext/to-html'

const tdStyle = {
  //width:'10vw',
  height: "8.5vw",
};
export default function Category() {
  const [catData, setCatData] = useState(null);
  const slug = useParams();
  console.log("slug", slug.slug);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category" && slug.current == $slug.slug]{
            title,
            subtitle,
            slug,
            "authorName":author->name,
            "authorImg":author->image.asset->url,
            publishedAt,
            description[],
            "insideImgUrl":insideimg.asset->url
          }`,
        { slug }
      )
      .then((data) => {
        setCatData(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!catData) return <div>Loading...</div>;
  return (
    <div className="w-100">
    
      <div
        style={{
          backgroundImage: `url(${catHeader})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 58.5%",
        }}
      >
        <TopBar />
        <hr style={{ margin: "2px" }} className="text-light" />
        <Menu />
        <Container className="pt-5">
          <Row className="mx-0">
            <Col lg={6} className="h-100 mb-0 mt-auto pe-0">
              <div className="pb-5">
                <h1>
                  <b>{catData.title}</b>
                </h1>
                <p>{catData.subtitle}</p>
                <p className=" my-5">
                  <i class="fa-solid fa-circle-arrow-down fa-4x text-primary "></i>
                </p>
              </div>

              <Table className="pb-0 pt-0 mb-0 mt-auto w-100">
                <tbody>
                  <tr>
                    <td className="bg-primary col-6" style={tdStyle}>
                      <div className="text-center ">
                        <p>
                          <i
                            class="fas fa-clock pe-2 fa-2x text-light"
                            aria-hidden="true"
                          ></i>
                        </p>
                        <h6 className="pt-3 my-0 text-dark"> 2 mins read</h6>
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <div className="text-center"></div>
                    </td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      <div className="text-center">
                        <p>
                          <i
                            class="fa fa-calendar pe-2 fa-2x text-primary"
                            aria-hidden="true"
                          ></i>
                        </p>
                        <h6 className="pt-3 my-0 text-dark"> Publish Date</h6>

                        <p className="my-0 text-muted">
                          <b>
                            <small>
                              {" "}
                              {Moment(catData.publishedAt).format(
                                "DD MMM YYYY"
                              )}
                            </small>
                          </b>
                        </p>
                      </div>
                    </td>
                    <td className="bg-primary" style={tdStyle}>
                      <div className="text-center">
                        <img
                          src={catData.authorImg}
                          alt={catData.authorName}
                          width="30px"
                          className="rounded-circle"
                          style={{ width: "35px", border: "solid white 1px" }}
                        />
                        <h6 className="pt-3 my-0 text-light"> Author</h6>
                        <p className="my-0 text-light">
                          <b>
                            <small>{catData.authorName}</small>
                          </b>
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={6} className="ms-0 ps-0">
              <img
                src={catData.insideImgUrl}
                alt={catData.title}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{ backgroundColor: "#FAFAFA" }} className="p-5">
        <div dangerouslySetInnerHTML={{__html: toHTML(catData.description)}} ></div>
      </Container>
      <Container style={{backgroundColor:"#FFEAE8"}}>
       <div className="p-5">
       <h5 className="text-center"><b>RECENT ARTICLES</b></h5>
       <p>Show the posts for this category</p>
       
       </div>
      </Container>
    </div>
  );
}
