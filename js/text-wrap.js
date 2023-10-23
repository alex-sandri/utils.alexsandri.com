{
  const textarea = document.createElement('textarea');
  textarea.cols = 80;
  textarea.rows = 20;
  textarea.placeholder = 'Type here...';

  const container = document.getElementById('prog');
  container.appendChild(textarea);

  // TODO: add input for max line length
  const wrapButton = document.createElement('button');
  wrapButton.innerText = 'Wrap';

  wrapButton.addEventListener('click', () => {
    // TODO
  });

  container.appendChild(wrapButton);
}
