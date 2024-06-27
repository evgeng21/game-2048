import { useEffect, useState } from "react";
import Chip from "./Chip";
import { runDown, runLeft, runRight, runUp } from "../utils/utils";

export default function GameField({ setMessage, setIsStarted }) {
  const [chipsState, setChipsState] = useState([]);
  const [direction, setDirection] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let newState = [...chipsState];
    switch (direction) {
      case "up":
        newState = runUp(newState);
        break;
      case "down":
        newState = runDown(newState);
        break;
      case "right":
        newState = runRight(newState);
        break;
      case "left":
        newState = runLeft(newState);
        break;
      default:
        break;
    }
    if (newState.length === 16) {
      setMessage(`Игра окончена, Вы проиграли. Было сделано шагов: ${counter}`);
      setIsStarted(false);
    } else if (newState.filter((el) => el.title === 2048).length > 0) {
      setMessage(`Игра окончена, Вы победили. Было сделано шагов: ${counter}`);
      setIsStarted(false);
    } else {
      let newChip;
      while (true) {
        newChip = getChipData();
        if (checkCell(newChip.positionId, newState)) {
          break;
        }
      }
      setChipsState([newChip, ...newState]);
    }
  }, [counter]);

  function randomPosition() {
    const randomX = Math.floor(Math.random() * 4);
    const randomY = Math.floor(Math.random() * 4);
    return [randomX, randomY];
  }

  function getChipData() {
    const position = randomPosition();
    const chipData = {
      chipId: Date.now(),
      positionX: position[0],
      positionY: position[1],
      positionId: `${position[0]}-${position[1]}`,
      position: {
        left: `${position[0] * 22}vmin`,
        top: `${position[1] * 22}vmin`,
      },
      title: 2,
    };
    return chipData;
  }

  function checkCell(idCell, busyArray) {
    let isFree = true;
    if (busyArray.length > 0) {
      isFree =
        busyArray.filter((cell) => cell.positionId === idCell).length === 0;
    }
    return isFree;
  }

  function handleClickButton(currentDirection) {
    setDirection(currentDirection);
    setCounter(counter + 1);
  }

  const content = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      content.push(`${i}-${j}`);
    }
  }

  return (
    <>
      <div className="game-field">
        {content.map((el) => (
          <div className="cell" id={el} key={el}></div>
        ))}
        {chipsState.map((chipState) => (
          <Chip chipState={chipState} key={chipState.chipId} />
        ))}

        <button onClick={() => handleClickButton("left")}>
          <img
            src="/images/arrow.png"
            alt=""
            style={{ transform: "rotate(90deg)" }}
          />
        </button>
        <button onClick={() => handleClickButton("right")}>
          <img
            src="/images/arrow.png"
            alt=""
            style={{ transform: "rotate(270deg)" }}
          />
        </button>
        <button onClick={() => handleClickButton("up")}>
          <img
            src="/images/arrow.png"
            alt=""
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        <button onClick={() => handleClickButton("down")}>
          <img src="/images/arrow.png" alt="" />
        </button>
      </div>
    </>
  );
}
