import React from 'react';
import {IoIosStar, IoIosStarOutline} from 'react-icons/io';

function Rating(props) {
    return(
        <div>
{/* Rating component accessing the props object, rating attribute */}
            <h1>Rating: {props.rating}</h1> 

            {props.rating >= 1 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
            {props.rating >= 2 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
            {props.rating >= 3 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
            {props.rating >= 4 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
            {props.rating >= 5 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}

        </div>
    );
}

export default Rating;