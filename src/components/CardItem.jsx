import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-scroll";

const CardItem = ({ title, img, dec }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="mx-auto mt-4">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{dec}</Card.Text>
          <Link to="contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardItem;
