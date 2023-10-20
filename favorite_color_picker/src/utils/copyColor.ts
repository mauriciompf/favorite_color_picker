const copiedValues: string[] = [];

export default async function copyColor(getBodyBg: string) {
  try {
    document.body.style.backgroundColor = getBodyBg; // Transform the background color to the copy color

    await navigator.clipboard.writeText(getBodyBg); // Copy the current background

    const prevCopy = copiedValues[copiedValues.length - 1];

    // Create a float message if the last copy is not the current background
    if (getBodyBg !== prevCopy) {
      copiedValues.push(getBodyBg);

      const existingFloatMessage = document.querySelector(".float-message");

      // Prevent create float message after copying the same color;
      if (!existingFloatMessage) {
        const floatMessage = document.createElement("p") as HTMLElement;
        floatMessage.textContent = "Color copied to clipboard.";
        floatMessage.setAttribute("class", "float-message");
        (document.querySelector("main") as HTMLElement).appendChild(
          floatMessage
        );

        setTimeout(() => {
          floatMessage.remove();
        }, 1250);
      }
    }
  } catch (err) {
    console.error(`Failed to copy: ${err}`);
  }
}