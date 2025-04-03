import React, { useState } from "react";
import "./wheel.css";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addHistory } from "../redux/WheelSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";

const SpinWheel = () => {
  const options = useSelector((state) => state.wheel.options);
  const [rotation, setRotation] = useState(0);
  const dispatch = useDispatch();

  const history = useSelector((state) => state.wheel.history);
  const WinningOption = history.length > 0 ? history[history.length - 1] : "";

  const handleSpin = () => {
    if (options.length < 2) {
      toast.warn("Add at least 2 options to spin the wheel!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    // Generate a random rotation angle
    const newRotation = rotation + 1800 + Math.random() * 1800;

    // Calculate the winning option after the spin stops
    setTimeout(() => {
      const normalizedRotation = newRotation % 360;
      const sectorAngle = 360 / options.length;
      const winningIndex =
        Math.floor((360 - normalizedRotation) / sectorAngle) % options.length;
      dispatch(addHistory(options[winningIndex]));
      toast(
        <div>
          Winning Option🎉 <br />
          <strong>{options[winningIndex]}</strong>
        </div>,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
    }, 3000); // Wait until spin completes (3s)

    setRotation(newRotation);
  };

  return (
    <div className="wheel-container">
      <div className="wheel-pointer"></div>
      <div
        className="wheel"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 3s cubic-bezier(0.1, 0.7, 0.1, 1)",
        }}
      >
        <span className="circle">Spin</span>
        {options.map((option, index) => {
          const angle = (360 / options.length) * index; // Angle for each slice
          return (
            <div
              key={index}
              className="option"
              style={{
                transform: `rotate(${angle}deg)`,
                background: `hsl(${angle}, 70%, 50%)`, // Dynamic color
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
      <Button text="Spin The Wheel!" className="mt-5" onClick={handleSpin} />

      {WinningOption && (
        <p className="winning">
          Winning Option:
          <strong className="winning-option">{WinningOption}</strong>
        </p>
      )}

      <ToastContainer />
    </div>
  );
};

export default SpinWheel;
