// import React from "react";
import "./tabs.css"

const Tabs = () => {
  return (
    <div className="tabs">
      Quick Filters :
      <label>
        <input type="radio" name="tabGroup" />
        <span>All Payouts</span>
        
      </label>
      <label>
        <input type="radio" name="tabGroup" />
        <span>Scheduled for next 2 days</span>

      </label>
      <label>
        <input type="radio" name="tabGroup" />
        <span>Queued (RazorpayX A/c)</span>

      </label>
    </div>)
};

export default Tabs;
