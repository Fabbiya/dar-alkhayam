import React from "react";

import './ServiceItem.css'

export default function ServiceItem(props) {
  return (

    <div className="card-service-item ">
        <img src={props.img} className=" img-fluid" alt="" />
    </div>
  );
}
