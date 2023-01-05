function selectPosition(length, gameBoard) {
  let position = [];
  let found = true;
  //Direction option (0 for vertical and 1 for horizontal)
  let directionOpt = Math.floor(Math.random() * 2);

  let horOpt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let horChoice = Math.floor(Math.random() * 10);
  let vertChoice = Math.ceil(Math.random() * 10);

  let secondChoice = 0,
    thirdChoice = 0,
    fourthChoice = 0;

  //Vertical
  if (directionOpt === 0) {
    if (vertChoice < length) {
      secondChoice = 1;
    } else if (10 - vertChoice < length - 1) {
      secondChoice = -1;
    } else {
      secondChoice = Math.round(Math.random()) ? 1 : -1;
    }
    thirdChoice = secondChoice < 0 ? -2 : 2;
    fourthChoice = secondChoice < 0 ? -3 : 3;
  } else {
    // Horizontal
    if (horChoice < length) {
      secondChoice = 1;
    } else if (9 - horChoice < length - 1) {
      secondChoice = -1;
    } else {
      secondChoice = Math.round(Math.random()) ? 1 : -1;
    }
    thirdChoice = secondChoice < 0 ? -2 : 2;
    fourthChoice = secondChoice < 0 ? -3 : 3;
  }

  switch (length) {
    case 1:
      position.push(horOpt[horChoice] + vertChoice);
      break;

    case 2:
      position[0] = horOpt[horChoice] + vertChoice;
      if (directionOpt === 0) {
        position[1] = horOpt[horChoice] + (vertChoice + secondChoice);
      } else {
        position[1] = horOpt[horChoice + secondChoice] + vertChoice;
      }
      break;

    case 3:
      position[0] = horOpt[horChoice] + vertChoice;
      if (directionOpt === 0) {
        position[1] = horOpt[horChoice] + (vertChoice + secondChoice);
        position[2] = horOpt[horChoice] + (vertChoice + thirdChoice);
      } else {
        position[1] = horOpt[horChoice + secondChoice] + vertChoice;
        position[2] = horOpt[horChoice + thirdChoice] + vertChoice;
      }
      break;
    case 4:
      position[0] = horOpt[horChoice] + vertChoice;
      if (directionOpt === 0) {
        position[1] = horOpt[horChoice] + (vertChoice + secondChoice);
        position[2] = horOpt[horChoice] + (vertChoice + thirdChoice);
        position[3] = horOpt[horChoice] + (vertChoice + fourthChoice);
      } else {
        position[1] = horOpt[horChoice + secondChoice] + vertChoice;
        position[2] = horOpt[horChoice + thirdChoice] + vertChoice;
        position[3] = horOpt[horChoice + fourthChoice] + vertChoice;
      }
      break;

    default:
      break;
  }

  position.map((eachPosition) => {
    gameBoard.ships.map((everyShip) => {
      everyShip.position.map((singlePosition) => {
        if (singlePosition === eachPosition) {
          position = selectPosition(length, gameBoard);
        }
      });
    });
  });

  return position;
}

module.exports = selectPosition;
