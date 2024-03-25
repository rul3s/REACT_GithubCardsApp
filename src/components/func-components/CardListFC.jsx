import React from "react";
import "../../styles/main.css";
import CardFC from "./CardFC";

const CardListFC = (props) => {
  return (
    <div>
      {props.dataList.map((user) => (
        // <Card
        //   name={user.name}
        //   avatar={user.avatar_url}
        //   company={user.company}
        // />
        <CardFC key={user.id} {...user} />
      ))}
    </div>
  );
};

export default CardListFC;
