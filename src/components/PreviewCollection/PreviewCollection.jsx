import React from "react";
import { Row } from "react-bootstrap";
import PreviewItem from "../PreviewItem/PreviewItem";
import "./PreviewCollection.scss";
const PreviewCollection = ({ title, items }) => {
  console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <Row>
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherItemProps}) => (
            <PreviewItem key={id} {...otherItemProps} />
          ))}
      </Row>
    </div>
  );
};

export default PreviewCollection;
