import React, {useState} from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating(props) {
  // //useState returns array with two values:
  // //1. Current state value, 2. Function to update it
  // //Below: rating=current state rating value setRating=function to update state rating value
  const [rating, setRating] = useState(props.rating);
//   const [rating, setRating] = useState(0) //Rating state initialized to zero by default

  return (
    <div>
      {/* Rating component accessing the props object, rating attribute */}

      {/* ========== EXAMPLE1: ========== */}
      {/*  <h1>Rating: {props.rating}</h1>
            {props.rating >= 1 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
            {props.rating >= 2 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
            {props.rating >= 3 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
            {props.rating >= 4 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
            {props.rating >= 5 ? (<IoIosStar/>) : (<IoIosStarOutline/>)} */}

      {/* ========== EXAMPLE2: ========== */}
      <h1>Rating: {rating}</h1>
      {rating >= 1 ? <IoIosStar onClick={()=> setRating(1)}/> : <IoIosStarOutline onClick={()=> setRating(1)}/>}
      {rating >= 2 ? <IoIosStar onClick={()=> setRating(2)}/> : <IoIosStarOutline onClick={()=> setRating(2)}/>}
      {rating >= 3 ? <IoIosStar onClick={()=> setRating(3)}/> : <IoIosStarOutline onClick={()=> setRating(3)}/>}
      {rating >= 4 ? <IoIosStar onClick={()=> setRating(4)}/> : <IoIosStarOutline onClick={()=> setRating(4)}/>}
      {rating >= 5 ? <IoIosStar onClick={()=> setRating(5)}/> : <IoIosStarOutline onClick={()=> setRating(5)}/>}
    </div>
  );
}

export default Rating;
