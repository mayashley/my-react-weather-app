import React from "react";
import Button from "./button";
import "./form.css";

const Form = (props) => {
  return (
    <div className="formContainer" >
      <form onSubmit = {props.loadWeather}>
        <div className="inputContainers">
        <input type="text" name="city" placeholder="Your city here..." />
        </div>
        <div className="inputContainers">
        <input id="country" type="text" name="country" placeholder="Your country" />
        </div>
        <div className="button">
        <Button/>
        </div>
        </form>
    </div>
    
  );
};
export default Form;
