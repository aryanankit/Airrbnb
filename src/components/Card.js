import React from "react";
import starImage from "./images/star.png"; 

export default function Card(props) {
    console.log(props.coverImg);
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online")  {
        badgeText = "ONLINE";
    }

    const coverImage = props.coverImg
    ? require(`./images/${props.coverImg}`)
    : null;
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={coverImage} className="card--image" alt="profile" />
            <div className="card--stats">
                <img src={starImage} className="card--star" alt="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}
