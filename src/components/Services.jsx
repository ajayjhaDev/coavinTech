import React from "react";

import data from "../data";
import CardItem from "./CardItem";

const Services = () => {
  return (
    <>
      <section
        className="p-3 text-center"
        style={{ backgroundColor: "#b7b7c7" }}
        id="services"
      >
        <h3>Our Services</h3>

        <div className="container">
          <div className="row">
            {data.map((ele) => (
              <CardItem
                key={ele.title}
                title={ele.title}
                img={ele.img}
                dec={ele.dec}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
