const year = document.querySelector("#year");
const promptHint = document.querySelector("#prompt-hint");
const promptChips = document.querySelectorAll(".prompt-chip");

if (year) {
  year.textContent = new Date().getFullYear();
}

for (const chip of promptChips) {
  chip.addEventListener("click", async () => {
    const prompt = chip.dataset.prompt?.trim();

    if (!prompt || !promptHint) {
      return;
    }

    let copied = false;

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(prompt);
        copied = true;
      } catch (error) {
        copied = false;
      }
    }

    promptHint.textContent = copied
      ? `Copied prompt: "${prompt}"`
      : `Try this in the chat: "${prompt}"`;
  });
}
