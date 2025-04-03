import React, { useState } from "react";
import Button from "../button/Button";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addOption, removeOption } from "../redux/WheelSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";

const OptionManager = () => {
  const [newOption, setNewOption] = useState("");
  const options = useSelector((state) => state.wheel.options);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (newOption.trim() !== "") {
      dispatch(addOption(newOption));
      toast(
        <div>
          Option Added! <br />
          Added <strong>{newOption}</strong> to the Wheel
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
      setNewOption("");
    }
  };

  const handleDelete = (index) => {
    dispatch(removeOption(index));
  };

  return (
    <div className="card shadow p-4 option-card">
      <p className="fw-bold">Wheel Options</p>

      {/* Input Field */}
      <div className="row g-2">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <Button text="Add" onClick={handleSubmit} />
        </div>
      </div>

      {/* Scrollable Option List */}
      <div className="option-list mt-3">
        <ul className="list-group gap-2">
          {options.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center custom-bg"
            >
              {item}
              <TiDeleteOutline
                className="delete-icon"
                onClick={() => handleDelete(index)}
              />
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OptionManager;
