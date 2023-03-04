import { Color } from "./CheckerItem";

export class Checker {
  x = 0;
  y = 0;
  Component: JSX.Element | undefined = undefined;
  color = Color.Black;

  constructor(x: number, y: number, component: JSX.Element, color: Color) {
    this.x = x;
    this.y = y;
    this.Component = component;
    this.color = color;
  }
}
