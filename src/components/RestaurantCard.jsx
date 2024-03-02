import React from "react";

const RestaurantCard = (props) => {
    return (
        <>
            <p>{props.restaurantName}</p>
            <p>{props.address}</p>
            <p>Rating: {props.rating}</p>
            <a href={props.website} target="_blank" rel="noopener noreferrer">
                <button className="button"> Ratings & More Info</button>
            </a>
        </>
    )
}

// create function to look for image in image folder maybe?

export default RestaurantCard