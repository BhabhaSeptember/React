import React from "react";
import Rating from './Rating';
import {Media} from 'react-bootstrap';

//Using arrow function to define Product component
const Product = (props) => {
  return (
    <div>  
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={props.data.imageUrl}
          alt="Image"
        />
        <Media.Body>
          <h5>{props.data.productName}</h5>
          {props.data.releasedDate}

          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />

          <p>{props.data.description}</p>
          <hr></hr>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Product;
