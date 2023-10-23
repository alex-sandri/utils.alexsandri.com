const elements = document.querySelectorAll('[data-src]');

for (const element of elements) {
  element.addEventListener('click', () => {
    const prog = element.getAttribute('data-src');

    cleanup();
    loadScript(prog);
    loadStyleSheet(prog)
  });
}

const cleanup = () => {
  const selectorsToRemove = ['#prog', 'link[data-prog]', 'script[data-prog]'];

  for (const selector of selectorsToRemove) {
    document.querySelector(selector)?.remove();
  }

  const container = document.createElement('div');
  container.id = 'prog';

  document.querySelector('main').appendChild(container);
}

const loadScript = (src) => {
  const script = document.createElement('script');
  script.src = `./js/${src}.js`;
  script.setAttribute('data-prog', '');

  document.body.appendChild(script);
}

const loadStyleSheet = (src) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `./css/${src}.css`;
  link.setAttribute('data-prog', '');

  document.head.appendChild(link);
}