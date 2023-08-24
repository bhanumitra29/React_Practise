import { Component } from "react";
import "./Style.css";
class ClassCompo12 extends Component {
  CreateBox = () => {
    return (
      <div>
        <h1>This is Created Using Class Component</h1>
        <p>This is done using external css</p>
        <p>This is done using internal css</p>
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1>Styling using Class Component</h1>

        <button onClick={this.CreateBox}>
          To see styling in Class Component
        </button>
      </div>
    );
  }
}

export default ClassCompo12;
