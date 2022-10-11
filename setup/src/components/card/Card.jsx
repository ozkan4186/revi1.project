import React from "react";
import Button from "../button/Button";
import CardStyle from "./card.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Card = ({ data }) => {
  //  const {id,name,job,image}=data

  return (
    <div>
      {data.map((item) => {
        const { id, image, job, name, text } = item;
        return (
          <div className={CardStyle.container} key={id}>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{text}</p>
            <span>
              <FaChevronLeft />
            </span>
            <span>
              <FaChevronRight />
            </span>

            <Button />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
