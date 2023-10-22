import getBgColor from "./getBgColor";

const arr: string[] = [];
export default function nextColor() {
  arr.push(
    window.getComputedStyle(document.body).getPropertyValue("background-color")
  );
  console.log(arr);
  return getBgColor();
}
