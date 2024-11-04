import React, {useState} from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating(props) {
  const [rating, setRating] = useState(props.rating);
//   const [rating, setRating] = useState(0) 

  return (
    
      
      <div style={styles.starStyle}>
    
      <h3>Rating: {rating}</h3>
      {rating >= 1 ? <IoIosStar /> : <IoIosStarOutline />}
      {rating >= 2 ? <IoIosStar /> : <IoIosStarOutline />}
      {rating >= 3 ? <IoIosStar /> : <IoIosStarOutline />}
      {rating >= 4 ? <IoIosStar /> : <IoIosStarOutline />}
      {rating >= 5 ? <IoIosStar /> : <IoIosStarOutline />}
      <p>Reviews: {props.numOfReviews} </p>
      </div>
  );
}

export default Rating;

const styles = {
  starStyle : {
    color : 'orange'
  }
};
