import { useEffect, useState } from "react";
import "./App.css";
import GameField from "./components/GameField";
import StartScreen from "./components/StartScreen";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [message, setMessage] = useState("Нажмите кнопку для начала игры");

  return (
    <>
      {isStarted && (
        <GameField setMessage={setMessage} setIsStarted={setIsStarted} />
      )}
      {!isStarted && (
        <StartScreen message={message} setIsStarted={setIsStarted} />
      )}
    </>
  );
}

export default App;
