import React,{useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {toHTML} from '@portabletext/to-html'
import { useParams } from "react-router-dom";
import sanityClient from "./../client.js";

export default function About() {
  const [data, setData] = useState(null);
  const slug = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about" ]{
            title,
            subtitle,
            slug,
            "authorName":author->name,
            "authorImg":author->image.asset->url,
            publishedAt,
            description[],
            "imgUrl":img.asset->url
          }`,
      )
      .then((data) => {
        setData(data[0]);
        console.log("data",data)
      })
      .catch(console.error);
  },[]);
  if (!data) return <div>Loading...</div>;
  return (
    <div>
     <div className=''> 
     <img src={data.imgUrl} style={{position:"absolute", left:"0px", top:"0px", maxHeight:"80vh", width:"100%", zIndex:"-1"}} alt="main page bg"/>
      <Container  style={{height:"75vh"}}>
        <div className='col-lg-6 d-flex align-items-end' style={{height:"80%"}}>
          <div >
          <h1 className='text-light text-uppercase py-3'>{data.title}</h1>
          <h5 className='text-light'>{data.subtitle}</h5>
          </div>
        </div>
        
      </Container></div>
     <Container style={{backgroundColor:"#FAFAFA"}} className="py-5" >
     <div dangerouslySetInnerHTML={{__html: toHTML(data.description)}} ></div>
     
     </Container>
    </div>
  )
}
