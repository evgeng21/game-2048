export function runUp (newState) {
    for (let x = 0; x <= 3; x++) {
        for (let y = 0; y <= 3; y++) {
          let positionY = y;
          let positionId = `${x}-${y}`;
          let chip = newState.filter((el) => el.positionId === positionId)[0];
          let title;
          if (chip && positionY > 0) {
            title = chip.title;
            while (positionY !== 0) {
              positionY -= 1;
              const busyCell = newState.filter(
                (el) => el.positionId === `${x}-${positionY}`
              );
              // debugger;
              if (busyCell.length === 0) {
                positionId = `${x}-${positionY}`;
              } else {
                if (busyCell[0].title === title) {
                  newState = newState.filter(
                    (el) => el.chipId !== busyCell[0].chipId
                  );
                  positionId = `${x}-${positionY}`;
                  title = title * 2;
                  break;
                }
                positionY += 1;
                break;
              }
            }
            chip = {
              chipId: chip.chipId,
              positionX: chip.positionX,
              positionY: positionY,
              positionId: positionId,
              position: {
                left: `${chip.positionX * 22}vmin`,
                top: `${positionY * 22}vmin`,
              },
              title: title,
            };
            newState = newState.map((el) => {
              if (el.chipId === chip.chipId) {
                return chip;
              }
              return el;
            });
          }
        }
      }
      return newState
}

export function runDown(newState) {
    for (let x = 0; x <= 3; x++) {
        for (let y = 3; y >= 0; y--) {
          let positionY = y;
          let positionId = `${x}-${y}`;
          let chip = newState.filter((el) => el.positionId === positionId)[0];
          let title;
          if (chip && positionY < 3) {
            title = chip.title;
            while (positionY !== 3) {
              positionY += 1;
              const busyCell = newState.filter(
                (el) => el.positionId === `${x}-${positionY}`
              );
              // debugger;
              if (busyCell.length === 0) {
                positionId = `${x}-${positionY}`;
              } else {
                if (busyCell[0].title === title) {
                  newState = newState.filter(
                    (el) => el.chipId !== busyCell[0].chipId
                  );
                  positionId = `${x}-${positionY}`;
                  title = title * 2;
                  break;
                }
                positionY -= 1;
                break;
              }
            }
            chip = {
              chipId: chip.chipId,
              positionX: chip.positionX,
              positionY: positionY,
              positionId: positionId,
              position: {
                left: `${chip.positionX * 22}vmin`,
                top: `${positionY * 22}vmin`,
              },
              title: title,
            };
            newState = newState.map((el) => {
              if (el.chipId === chip.chipId) {
                return chip;
              }
              return el;
            });
          }
        }
      }
      return newState
}

export function runLeft(newState) {
    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= 3; x++) {
          let positionX = x;
          let positionId = `${x}-${y}`;
          let chip = newState.filter((el) => el.positionId === positionId)[0];
          let title;
          if (chip && positionX > 0) {
            title = chip.title;
            while (positionX !== 0) {
              positionX -= 1;
              const busyCell = newState.filter(
                (el) => el.positionId === `${positionX}-${y}`
              );
              // debugger;
              if (busyCell.length === 0) {
                positionId = `${positionX}-${y}`;
              } else {
                if (busyCell[0].title === title) {
                  newState = newState.filter(
                    (el) => el.chipId !== busyCell[0].chipId
                  );
                  positionId = `${positionX}-${y}`;
                  title = title * 2;
                  break;
                }
                positionX += 1;
                break;
              }
            }
            chip = {
              chipId: chip.chipId,
              positionX: positionX,
              positionY: chip.positionY,
              positionId: positionId,
              position: {
                left: `${positionX * 22}vmin`,
                top: `${chip.positionY * 22}vmin`,
              },
              title: title,
            };
            newState = newState.map((el) => {
              if (el.chipId === chip.chipId) {
                return chip;
              }
              return el;
            });
          }
        }
      }
      return newState
}

export function runRight(newState) {
    for (let y = 0; y <= 3; y++) {
        for (let x = 3; x >= 0; x--) {
          let positionX = x;
          let positionId = `${x}-${y}`;
          let chip = newState.filter((el) => el.positionId === positionId)[0];
          let title;
          if (chip && positionX < 3) {
            title = chip.title;
            while (positionX !== 3) {
              positionX += 1;
              const busyCell = newState.filter(
                (el) => el.positionId === `${positionX}-${y}`
              );
              if (busyCell.length === 0) {
                positionId = `${positionX}-${y}`;
              } else {
                if (busyCell[0].title === title) {
                  newState = newState.filter(
                    (el) => el.chipId !== busyCell[0].chipId
                  );
                  positionId = `${positionX}-${y}`;
                  title = title * 2;
                  break;
                }
                positionX -= 1;
                break;
              }
            }
            chip = {
              chipId: chip.chipId,
              positionX: positionX,
              positionY: chip.positionY,
              positionId: positionId,
              position: {
                left: `${positionX * 22}vmin`,
                top: `${chip.positionY * 22}vmin`,
              },
              title: title,
            };
            newState = newState.map((el) => {
              if (el.chipId === chip.chipId) {
                return chip;
              }
              return el;
            });
          }
        }
      }
      return newState
} 