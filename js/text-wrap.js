{
  const textarea = document.createElement('textarea');
  textarea.cols = 80;
  textarea.rows = 20;
  textarea.placeholder = 'Type here...';

  const container = document.getElementById('prog');
  container.appendChild(textarea);

  const wrapButton = document.createElement('button');
  wrapButton.innerText = 'Wrap';

  wrapButton.addEventListener('click', () => {
    const input = textarea.value;
    const outputLines = [];

    // TODO: add input for max line length
    const maxLineLength = 80;

    // TODO: for now this is good enough
    const words = input.split(' ');

    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];

      const currentLine = outputLines.at(-1) ?? '';
      const modifiedLine = `${currentLine} ${currentWord}`.trim();

      if (modifiedLine.length > maxLineLength) {
        outputLines.push(currentWord);
      } else {
        outputLines.pop();
        outputLines.push(modifiedLine);
      }
    }

    textarea.value = outputLines.join('\n');
  });

  container.appendChild(wrapButton);
}
