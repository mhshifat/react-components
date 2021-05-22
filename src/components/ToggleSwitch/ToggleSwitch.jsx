import { useState } from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setSwitchOn((value) => !value)}
      className={`toggleSwitch ${switchOn ? "active" : ""}`}
    />
  );
}
