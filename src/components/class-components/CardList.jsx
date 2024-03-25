import React from "react";
import "../../styles/main.css";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.dataList.map((user) => (
          // <Card
          //   name={user.name}
          //   avatar={user.avatar_url}
          //   company={user.company}
          // />
          <Card key={user.id} {...user} />
        ))}
      </div>
    );
  }
}

export default CardList;
