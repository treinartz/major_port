import { useState } from "react";
import "../styles/CodeBlock.css";

function CodeBlock({ code }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleCode = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="code-block">
      <button className="toggle-button" onClick={toggleCode}>
        {isVisible ? "▼ Hide Code" : "▶ Show Code"}
      </button>

      {isVisible && (
        <pre className="code-content">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

export default CodeBlock;
