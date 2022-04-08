import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then(
        (result) => {},
        (error) => {}
      );
  }, []);

  return (
    <div>
      <p>Hello!</p>
      <input type={"text"} />
    </div>
  );
};

export default App;
