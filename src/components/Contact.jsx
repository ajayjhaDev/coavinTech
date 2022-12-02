import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="row">
        <div className="text-center p-5 col">
          <h4>Contact Us</h4>

          <ListGroup>
            <strong>
              <ListGroup.Item>
                <a href="mailto: ajaykumarjha05072000@gmail.com">
                  Email: coavinTech @gmail.com
                </a>
              </ListGroup.Item>

              <ListGroup.Item>Mob: +91-9608299899</ListGroup.Item>

              <ListGroup.Item>
                Address: 11802 Warfield St, San Antonio, TX 78216, United States
              </ListGroup.Item>
            </strong>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Contact;
