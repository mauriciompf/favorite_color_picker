import { colorList } from "./colorList";

const emptyTextElement = document.querySelector(".empty-HTML");

export default function emptyColors() {
  if (colorList.length > 0) {
    emptyTextElement?.classList.remove("active");
  } else {
    emptyTextElement?.classList.add("active");
  }
}
