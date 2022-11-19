import React from "react";
import Input from "./Input";
//import Button from "../UI/Button";
function Download() {
  return (
    <div>
      <form className="Form1">
        <Input
          type="text"
          label="Event Name"
          placeholder="Enter your event name"
        />
        <Input
          type="text"
          label="Description"
          placeholder="Tell us Something about the event"
        />
        <Input
          type="date"
          label="Date"
          placeholder="Enter event date"
          // min={currentDate}
          // inputChange={inputHandler}
        />
        <Input
          type="number"
          label="Time"
          placeholder="What's the timing of event"
          min="1"
          max="12"
          // inputChange={inputHandler}
        />
        <select
          class="select select-info w-full max-w-xs"
          // onChange={timeFormatHandler}
        >
          <option disabled selected>
            AM/PM
          </option>
          <option>AM</option>
          <option>PM</option>
        </select>
        <Input
          type="text"
          label="Thumbnail"
          placeholder="Thumbnail of the event (Google Drive link)"
          // inputChange={inputHandler}
        />
      </form>
    </div>
  );
}

export default Download;
