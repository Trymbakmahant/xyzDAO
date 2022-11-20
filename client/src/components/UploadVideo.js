import Input from "./Input";
// import Button from "../UI/Button";
import { useState, useContext } from "react"; //import useContext
// import { AppContext } from "../context/AddressContext"; // import Appcontext
// import classes from "./Host.module.css";

const Host = () => {
  return (
    <div>
      <form className="Form1">
        <Input type="text" label="Event Name" placeholder="xxxx" />
        <Input type="text" label="Description" placeholder="xxt" />
        <Input type="date" label="Date" placeholder="xxx" />
        <Input type="number" label="Time" placeholder="xx" min="1" max="12" />
        <select className="select select-info w-full max-w-xs">
          <option disabled selected>
            AM/PM
          </option>
          <option>AM</option>
          <option>PM</option>
        </select>
        <Input
          type="text"
          label="Thumbnail"
          placeholder="Thumbnail of the video (Google Drive link)"
          // inputChange={inputHandler}
        />
      </form>
    </div>
  );
};
export default Host;
