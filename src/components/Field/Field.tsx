import styles from './Field.module.scss';
import { CheckerItem, Color } from '../Checker/CheckerItem';
import { useState } from 'react';
import { Checker } from '../Checker/Checker';
import { getAvailableMoves, getInitCheckers, Point } from './utils';

const cellVerticalCount = 8;
const cellHorizontalCount = 8;
const rowsWithCheckers = 3;


export const Field = () => {
  const [checkers, setCheckers] = useState<Checker[]>(getInitCheckers(cellVerticalCount, cellHorizontalCount, rowsWithCheckers));
  const [selectedChecker, setSelectedChecker] = useState<Point | null>(null);
  const [availableMoves, setAvailableMoves] = useState<Point[]>([]);

  const clickCellHandler = (checker: Checker) => {
    setSelectedChecker({ x: checker.x, y: checker.y });

    setAvailableMoves(getAvailableMoves(cellVerticalCount, cellHorizontalCount, checker.x, checker.y))
  }
  console.log(availableMoves);


  return (
    <div className={styles.field}>
      {Array.from(Array(cellVerticalCount)).map((_, x) => (
        <div className={`${styles.row} ${x % 2 === 0 ? styles.even : styles.odd}`}>
          {Array.from(Array(cellHorizontalCount)).map((_, y) => {
            const checker = checkers.find(c => c.x === x && c.y === y);
            const isSelected = selectedChecker?.x === x && selectedChecker.y === y;
            const availableMove = availableMoves.find(m => m.x === x && m.y === y);

            return (
              <div
                className={`
                  ${styles.cell} 
                  ${isSelected ? styles.selected : ''}
                  ${availableMove ? styles.availableMove : ''}
                `}
                onClick={checker ? () => clickCellHandler(checker) : undefined}
              >
                {checker?.Component}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
