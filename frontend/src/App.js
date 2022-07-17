import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("user/")
      .then((resp) => resp.json())
      .then((msg) => setMessage(msg.message));
  }, []);

  return <p>Hello team {message}</p>;
}

export default App;
