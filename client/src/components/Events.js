import React from "react";
import { useState } from "react";
// import "./Events.css";

export const Events = () => {

  return (
    <div>
      <h4>Upcoming appointments:</h4>
      <div>
        <div>
          <br />
          <br />
          <p className="title">Grooming appointment:</p>
          <p>18-12-2021</p>
        </div>
        <div>
        <p className="title">Vet appointment:</p>
          <p>13-12-2021</p>
          <br />
        
        </div>
        <div>
            {/* <label>Title <br />
               <input  type="text"/>
            </label> <br />
            <label>Details <br />
               <input  type="text"/>
            </label> <br />  */}
            <button className="btn btn-primary">set custom event</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
