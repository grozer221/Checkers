import { Checker } from '../Checker/Checker';
import { CheckerItem, Color } from '../Checker/CheckerItem';

export type Point = { x: number; y: number };

const blackChecker = (i: number, j: number) => new Checker(i, j, <CheckerItem backgroundColor={Color.Black} nestedCirclesColor={Color.White} />, Color.Black);
const whiteChecker = (i: number, j: number) => new Checker(i, j, <CheckerItem backgroundColor={Color.White} nestedCirclesColor={Color.Black} />, Color.White);

export const getInitCheckers = (cellVerticalCount: number, cellHorizontalCount: number, rowsWithCheckers: number = 3) => {
  const checkers: Checker[] = [];
  for (let i = 0; i < cellVerticalCount; i++) {
    const rowEven = i % 2 === 0;

    for (let j = 0; j < cellHorizontalCount; j++) {
      const colEven = j % 2 === 0;

      if (i < rowsWithCheckers) {
        if (rowEven)
          colEven || checkers.push(blackChecker(i, j))
        else
          colEven && checkers.push(blackChecker(i, j))
      }
      else if (i + 1 > cellVerticalCount - rowsWithCheckers) {
        if (rowEven)
          colEven || checkers.push(whiteChecker(i, j))
        else
          colEven && checkers.push(whiteChecker(i, j))
      }
    }
  }
  return checkers;
}

export const getAvailableMoves = (cellVerticalCount: number, cellHorizontalCount: number, x: number, y: number) => {
  const availableMoves: Point[] = [];
  // top left
  if (x > 0 && y > 0) {
    availableMoves.push({ x: x - 1, y: y - 1 });
  }
  // top right
  if (x > 0 && y < cellHorizontalCount - 1) {
    availableMoves.push({ x: x - 1, y: y + 1 });
  }
  // bottom right
  if (x < cellVerticalCount - 1 && y < cellHorizontalCount - 1) {
    availableMoves.push({ x: x + 1, y: y + 1 });
  }
  // bottom left
  if (y > 0 && x < cellVerticalCount - 1) {
    availableMoves.push({ x: x + 1, y: y - 1 });
  }

  return availableMoves;
}
