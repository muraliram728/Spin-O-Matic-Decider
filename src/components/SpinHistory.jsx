import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { removeHistory } from "../redux/WheelSlice";

const SpinHistory = () => {
  const history = useSelector((state) => state.wheel.history);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeHistory(index));
  };

  return (
    <div className="card shadow p-4 option-card">
      <p className="fw-bold">Spin History</p>
      <div className="option-list mt-3">
        <ul className="list-group gap-2">
          {history.map((item, index) => (
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
    </div>
  );
};

export default SpinHistory;
