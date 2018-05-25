import React from "react";

const SideCard = props => (
  <div className="card side-card">
  <img className="card-img-top" src={props.imagePath}
      alt={props.alt}/>
      <div id={props.id} className="card-body">
          <p className="card-text">{props.cardText}</p>
      </div>
</div>

);

export default SideCard;