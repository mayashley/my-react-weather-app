import React from "react";
import "./forecast.css";

const Forecast = props => {
  return (
    <div className="weatherContainer">
    <div className="weather">
      {props.country && props.city && (
        <p>
          <span> Location: </span>
          {props.city}, {props.country}{" "}
        </p>
      )}

      {props.temperature && (
        <p>
          <span>Temperature:</span> {props.temperature} °F
        </p>
      )}
      {props.wind && (
        <p>
          <span>Wind Speed:</span> {props.wind} mph
        </p>
      )}
      {props.clouds && (
        <p>
          <span>Cloud Cover:</span> {props.clouds} %
        </p>
      )}
      {props.error && <p>{props.error}</p>}
    </div>
    </div>
  );
};
export default Forecast;
