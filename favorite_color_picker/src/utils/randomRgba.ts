export default function randomRgba() {
  //@ts-ignore
  const { floor, random } = Math;
  //@ts-ignore
  const randomRGB = Array(3)
    .fill(null)
    .map(() => floor(random() * 255));
  //@ts-ignore
  const alpha = (random() * 1).toFixed(2);

  const rgb = [];
  for (let i = 0; i < 3; i++) {
    //@ts-ignore
    rgb.push(randomRGB[i]);
  }
  //@ts-ignore
  rgb.join(", ");

  const rgba = `rgba(${rgb}, ${alpha})`;

  return rgba;
}
