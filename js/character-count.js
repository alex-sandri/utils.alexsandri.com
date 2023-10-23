{
  const textarea = document.createElement('textarea');
  textarea.cols = 80;
  textarea.rows = 20;
  textarea.placeholder = 'Type here...';

  const stats = document.createElement('div');
  stats.id = 'textarea-stats';

  {
    const characterCount = document.createElement('p');
    characterCount.insertAdjacentHTML('beforeend', '<span>Count</span>');
    characterCount.insertAdjacentHTML('beforeend', '<span>0</span>');

    stats.appendChild(characterCount);

    const countCharacters = e => {
      const { value } = e.target;

      characterCount.querySelector(':scope > span:last-child').innerText = value.length;
    };

    textarea.addEventListener('keyup', countCharacters);
    textarea.addEventListener('keydown', countCharacters);
  }

  const container = document.getElementById('prog');
  container.appendChild(textarea);
  container.appendChild(stats);
}
