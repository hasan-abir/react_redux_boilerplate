import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMessage } from "./store/actions/testAction";
import "./App.scss";

export default function App() {
  const msg = useSelector(state => state.test.msg);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Coming from redux: {msg}</p>
      <button onClick={() => dispatch(changeMessage("Goodbye"))}>
        Change Message
      </button>
    </div>
  );
}
