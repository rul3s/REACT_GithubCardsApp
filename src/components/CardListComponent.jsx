import React from "react";
import "../styles/main.css";
import CardComponent from "./CardComponent";

const CardListComponent = (props) => {
  return (
    <div>
      {props.dataList.map((user) => (
        // <CardComponent
        //   name={user.name}
        //   avatar={user.avatar_url}
        //   company={user.company}
        // />
        <CardComponent {...user} />
      ))}
    </div>
  );
};

export default CardListComponent;
