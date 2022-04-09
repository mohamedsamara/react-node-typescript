import React, { useEffect } from "react";
import { add } from "@/utils/math";
import Button from "@/components/Button";

const App: React.FC = () => {
  useEffect(() => {
    fetch("/api/test").then((res) => res.json());
    add(1, 2);
  }, []);

  return (
    <div>
      <p>Hello!</p>
      <input type={"text"} />
      <Button />
    </div>
  );
};

export default App;
