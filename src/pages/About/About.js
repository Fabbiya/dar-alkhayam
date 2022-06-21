import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { toHTML } from "@portabletext/to-html";
import sanityClient from "../../client.js";
import BarChart from "../../components/BarChart/BarChart.js";
import "./About.css"

export default function About() {
  const [data, setData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pages" && slug.current == "about-us" ]{
            title,
            subtitle,
            slug,
            "authorName":author->name,
            "authorImg":author->image.asset->url,
            publishedAt,
            description[],
            "imgUrl":img.asset->url
          }`
      )
      .then((data) => {
        setData(data[0]);
        console.log("data", data);
      })
      .catch(console.error);
  }, []);
  if (!data)
    return (
      <div className="text-center bg-light d-flex align-items-center justify-content-center" style={{height:"100vh", width:"100vw", position:"absolute", left:"0px", top:"0px", zIndex:"9999"}}>
       <div className="">
       <Spinner animation="border" variant="primary" /> <p>Loading....</p> 
       </div>
      </div>
    );
  return (
    <div>
      <div>
        <img
          src={data.imgUrl}
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            maxHeight: "80vh",
            width: "100%",
            zIndex: "-1",
          }}
          alt="main page bg"
          className="bg-about"
        />
        <Container style={{ height: "65vh" }}>
          <div
            className="col-lg-6 d-flex align-items-end"
            style={{ height: "90%" }}
          >
            <div>
              <h1 className="text-light text-uppercase py-3">{data.title}</h1>
              <h5 className="text-light">{data.subtitle}</h5>
            </div>
          </div>
        </Container>
      </div>
      <Container style={{ backgroundColor: "#FAFAFA" }} className="py-5 px-3">
        <div
          dangerouslySetInnerHTML={{ __html: toHTML(data.description) }}
        ></div>
        <BarChart />
      </Container>
    </div>
  );
}
