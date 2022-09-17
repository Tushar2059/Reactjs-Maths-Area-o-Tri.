import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { acceptval } from "../../../Action/Index";
import { rezContext } from "./Act1startpage";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Inputvalues = () => {
  const dispatch = useDispatch();
  const { arv, setArv } = useContext(rezContext);

  const myState = useSelector((state) => state.savethenum);

  console.log("This is mystate" + myState);

  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const navigate = useNavigate();
  const [secondvalue, setSecondvalue] = useState();
  const [secondvalue1, setSecondvalue1] = useState();

  const inputValues = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const onSubmit = (e) => {
    
    toast.success("Two squares ABCD and EHGF are created successfully !", {
      position: "top-center",
    });
    e.preventDefault();
    setValue1(value);
    setSecondvalue1(secondvalue);

    dispatch(() => {
      acceptval(5);
    });

    navigate("/activity1/letusverify/act1startpage/twosqare", {
      state: { val1: `${value}`, val2: `${secondvalue}` },
    });
    console.log(arv);
    setArv(2);
  };

  const inputValuestwo = (event) => {
    console.log(secondvalue1 + value1);
    console.log(event.target.value);
    setSecondvalue(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="mt-5 ms-5">
        <div className=" d-flex flex-column  align-items-center">
          <div className="col-5 d-flex">
            <label className="fs-4 fw-bold">
              Enter value of side in a cm :
            </label>
            <input
              className="form-control ms-3 "
              type="number"
              value={value}
              onChange={inputValues}
              style={{ width: "20%" }}
              required
            />
          </div>

          <div className="col-5 d-flex mt-3">
            <label className="fs-4 fw-bold">
              Enter value of side in b cm :
            </label>

            <input
              className="form-control ms-3"
              type="number"
              value={secondvalue}
              onChange={inputValuestwo}
              style={{ width: "20%" }}
              required
            />
          </div>

          <input
            className="btn btn-danger col-2 mt-3"
            type="submit"
            value="Draw"
          />
        </div>
      </form>
    </div>
  );
};

export default Inputvalues;
