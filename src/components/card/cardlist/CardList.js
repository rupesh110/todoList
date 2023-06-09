import React from "react";
import "./cardList.css";

export default function CardList() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container">
      <div className="cardContainer">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <p>Hello</p>
      </div>
    </div>
  );
}
