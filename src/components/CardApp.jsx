import React from "react";
import "../styles/main.css";
import CardList from "./CardList";
import SearchAddForm from "./SearchAddForm";

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

class CardApp extends React.Component {
  state = {
    profiles: usersData,
  };

  addUserData = (userData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, userData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <SearchAddForm addUser={this.addUserData} />
        <CardList dataList={this.state.profiles} />
      </div>
    );
  }
}

export default CardApp;
