import React from "react";

import "./Help.css";

const Help=()=>{
    return(
       
        <div>
          <div className="Help-Container">
           <h3>HELP 🤝:</h3>
  <nav class="help-section">
  <ul>
    <li>
       <a href="./Help">
          <img src="./assets/Images/Payment.jpg" alt="" />
           Payments
       </a>
    </li>


    <li>
        <a href="./Help">
          <img src="./assets/Images/Shipping.jpg" alt="" />
           Shipping
        </a>
    </li>


    <li>
        <a href="./Help">
          <img src="./assets/Images/Cancellation & Return.jpg" alt="" />
            Cancellation & Return
        </a>
    </li>


    <li>
      <a href="./Help">
        <img src="./assets/Images/Feedback.jpg" alt="" />
          Feedback
      </a>
    </li>
  </ul>
</nav>
</div>
        </div>
    )
};
export default Help;