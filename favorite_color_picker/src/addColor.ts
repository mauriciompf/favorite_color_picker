import { colorList } from "./colorList";

export default function addColor(color: string) {
  // @ts-ignore
  colorList.push(color);
  console.log(colorList);
}
