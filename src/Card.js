import React from "react";


export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText= "SOLD OUT"
    }else if (props.item.location === "Online") {
        badgeText= "ONLINE"
    }
    return(
        <div className="cards--list">
        <div className="card">
           {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`${props.item.coverImg}`} alt="img" className="card--image"/>
            <div className="card--stats">
                <img src="data:image/png;base64,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" alt="img" className="card--star" />
                 <span >{props.item.stats.rating}</span>
                 <span className="gray">({props.item.stats.reviewCount}) *</span>
                 <span className="gray">{props.item.location}</span>
            </div>
                 <p className="card--title"><b>{props.item.title}</b></p> 
                 <p className="card--price"><span><b>from ${props.item.price}</b></span> / person</p>
        </div>
        </div>
    )
}