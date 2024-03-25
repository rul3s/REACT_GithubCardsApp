import React, { useState } from "react";
import "../../styles/main.css";
import CardListFC from "./CardListFC";
import AddFormFC from "./AddFormFC";

const usersData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

const CardAppFC = (props) => {
  const [profiles, setProfiles] = useState(usersData);

  const addUserData = (userData) => {
    setProfiles([profiles, userData]);
  };

  return (
    <div>
      <div className="header">{props.title}</div>
      <AddFormFC addUser={addUserData} />
      <CardListFC dataList={profiles} />
    </div>
  );
};

export default CardAppFC;
