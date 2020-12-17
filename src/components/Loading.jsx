import React from "react";
import ReactDOM from "react-dom";
const Loading = () => {
  return ReactDOM.createPortal(
    <LoadingComponent />,
    document.getElementById("loading-root")
  );
};

export default Loading;

function LoadingComponent() {
  return (
    <div style={{ position: "fixed", top: "50%", left: "50%" }}>
      <div className="text-center">
        <div className="spinner-border text-danger spinner-xl" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
