import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("/user")
      .then((resp) => resp.json())
      .then((message) => console.log(message));
  }, []);

  return <p>Hello team </p>;
}

export default App;
