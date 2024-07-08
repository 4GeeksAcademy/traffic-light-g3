import React, { useState } from 'react'

const TrafficLight = () => {
  const colors = ["red", "yellow", "green"]
  const [color, setColor] = useState("");

  function onClick(event) {
    const selectedElement = event.target;
    setColor(selectedElement.id);

    if (selectedElement.nodeName === "BUTTON") {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }
  }

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center gap-4 min-vh-100'>
      <div className="d-inline-flex flex-column justify-content-center align-items-center gap-2 p-4 rounded-pill bg-black">
        <div onClick={onClick} id='red' className={`bg-danger rounded-circle opacity-50 ${color === "red" && "light opacity-100"}`} style={{ height: "100px", width: "100px" }}></div>
        <div onClick={onClick} id='yellow' className={`bg-warning rounded-circle opacity-50 ${color === "yellow" && "light opacity-100"}`} style={{ height: "100px", width: "100px" }}></div>
        <div onClick={onClick} id='green' className={`bg-success rounded-circle opacity-50 ${color === "green" && "light opacity-100"}`} style={{ height: "100px", width: "100px" }}></div>
      </div>
      <button onClick={onClick} className='btn btn-primary'>Change color</button>
    </div>
  )
}

export default TrafficLight