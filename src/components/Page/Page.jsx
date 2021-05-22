export default function Page({ children }) {
  return (
    <div className="page">
      <div className="page__preview">{children}</div>
      <div className="page__code">
        <h3>React JSX</h3>
        <pre>
          {String`import { useState } from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setSwitchOn((value) => !value)}
      className={'toggleSwitch $ {switchOn ? "active" : ""}'}
    />
  );
}`}
        </pre>
        <h3>CSS</h3>
        <pre>{String`.toggleSwitch {
  width: 50px;
  height: 30px;
  background: #c7c7c7;
  border-radius: 100px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}

.toggleSwitch::before {
  content: "";
  position: absolute;
  background: #fff;
  border-radius: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  transition: all .2s ease;
  width: calc(30px - 4px);
  height: calc(100% - 4px);
  left: 2px;
  bottom: 2px;
}

.toggleSwitch.active::before {
  transform: translateX(20px);
}
        `}</pre>
      </div>
    </div>
  );
}
