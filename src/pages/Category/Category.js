import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import catHeader from "./../../resources/post/catHeader.png";
import sanityClient from "../../client.js";
import { Container ,Spinner} from "react-bootstrap";
import {toHTML} from '@portabletext/to-html'
import SectionPosts from "../../components/SectionPosts/SectionPosts";
import './Category.css'

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

  if (!catData) return (
    <div className="text-center bg-light d-flex align-items-center justify-content-center" style={{height:"100vh", width:"100vw", position:"absolute", left:"0px", top:"0px", zIndex:"9999"}}>
     <div className="">
     <Spinner animation="border" variant="primary" /> <p>Loading....</p> 
     </div>
    </div>
  );
  return (
    <div className="w-100">
    
      <div
       
      >
        <img src={catHeader} style={{position:"absolute", left:"0px", top:"0px", maxHeight:"46vh", width:"100%", zIndex:"-1"}} alt="main page bg" className="bg-category"/>
        <Container  style={{height:"35vh"}}>
        <div className='col-lg-6 d-flex align-items-end' style={{height:"90%"}}>
          <div >
          <h1 className='text-light text-uppercase py-3'>{catData.title}</h1>
          <h5 className='text-light'>{catData.subtitle}</h5>
          </div>
        </div>
        
      </Container>
      </div>
      <Container style={{ backgroundColor: "#FAFAFA" }} className="py-5 px-3">
        <div dangerouslySetInnerHTML={{__html: toHTML(catData.description)}} ></div>
      </Container>
      <Container style={{backgroundColor:"#FFEAE8"}}>
       <div className="py-5">
       <h5 className="text-center"><b>RECENT ARTICLES</b></h5>
       <SectionPosts/>
       
       </div>
      </Container>
    </div>
  );
}
