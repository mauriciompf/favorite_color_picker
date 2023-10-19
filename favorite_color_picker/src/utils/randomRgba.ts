export default function randomRgba() {
  const { floor, random } = Math;
  const randomRGB = Array(3)
    .fill(null)
    .map(() => floor(random() * 255));
  const alpha = (random() * 1).toFixed(2);

  const rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(randomRGB[i]);
  }
  rgb.join(", ");

  const rgba = `rgba(${rgb}, ${alpha})`;

  return rgba;
}
