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

  return <p>=Hello!</p>;
};

export default App;
