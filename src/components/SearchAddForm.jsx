import React from "react";
import "../styles/main.css";

class SearchAddForm extends React.Component {
  //userNameInput = React.createRef();

  state = { userName: "" };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
          //ref={this.userNameInput}
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default SearchAddForm;
