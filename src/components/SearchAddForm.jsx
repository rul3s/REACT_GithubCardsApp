import React from "react";
import "../styles/main.css";

class SearchAddForm extends React.Component {
  userNameInput = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userNameInput.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          required
          ref={this.userNameInput}
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default SearchAddForm;
