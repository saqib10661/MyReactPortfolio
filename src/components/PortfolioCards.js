import React from "react";

function PortfolioCards(props) {
    return(
    <div className="portfolio-cards">
        <img src={props.imgUrl} alt=""/>
        <p>{props.detail}</p>
    </div>
    )
}

export default PortfolioCards