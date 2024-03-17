import React from "react";
import "../styles/main.css";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      {props.dataList.map((user) => (
        // <Card
        //   name={user.name}
        //   avatar={user.avatar_url}
        //   company={user.company}
        // />
        <Card {...user} />
      ))}
    </div>
  );
};

export default CardList;
