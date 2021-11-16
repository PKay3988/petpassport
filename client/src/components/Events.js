import React from "react";
import { useState } from "react";
// import "./Events.css";

export const Events = () => {

  return (
    <div>
      <h4>Your incoming appointments:</h4>
      <div>
        <div>
          <span>Grooming appointment:</span>
          <br />
          <span>18-12-2021</span>
        </div>
        <div>
          <span>Vet appointment:</span>
          <br />
          <span>13-12-2021</span>
        </div>
        <div>
            {/* <label>Title <br />
               <input  type="text"/>
            </label> <br />
            <label>Details <br />
               <input  type="text"/>
            </label> <br />  */}
            <button>set custom event</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
