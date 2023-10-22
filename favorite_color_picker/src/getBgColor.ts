import randomRgba from "./utils/randomRgba";
export default function getBgColor() {
  document.body.style.backgroundColor = randomRgba();
  return randomRgba();
}
