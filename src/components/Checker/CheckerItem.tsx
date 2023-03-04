import styles from './Checker.module.scss';
import { CSSProperties } from 'react';

export enum Color {
  Black = 'black',
  White = 'white',
}

type Props = {
  backgroundColor: Color;
  nestedCirclesColor: Color;
}

export const CheckerItem = ({ backgroundColor, nestedCirclesColor }: Props) => {
  const style = { '--backgroundColor': backgroundColor, '--nestedCirclesColor': nestedCirclesColor } as CSSProperties;

  return (
    <div className={styles.checker} style={style}>
      <div>
        <div>
        </div>
      </div>
    </div>
  )
}
