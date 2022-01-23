import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './PreviewItem.scss';
const PreviewItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
        <div className="collection-image" style={{backgroundImage:`url(${imageUrl})`}}>
        </div>
        <div className="collection-footer">
          <span>{name}</span>
          <span>${price}</span>
        </div>
    </div>
  );
};

export default PreviewItem;
