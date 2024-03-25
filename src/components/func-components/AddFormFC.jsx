import React, { useState } from "react";
import "../../styles/main.css";
import axios from "axios";

const AddFormFC = (props) => {
  const [userName, setUserName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.addUser(resp.data);
    this.setState(() => ({
      userName: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button>Add card</button>
    </form>
  );
};

export default AddFormFC;
