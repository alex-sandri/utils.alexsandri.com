const config = { version: 1 };

const elements = document.querySelectorAll('[data-src]');

for (const element of elements) {
  element.addEventListener('click', () => {
    const prog = element.getAttribute('data-src');

    cleanup();
    loadScript(prog);
    loadStyleSheet(prog);

    document.querySelector('[data-src].selected')?.classList.remove('selected');
    element.classList.add('selected');
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
  script.src = `./js/${src}.js?v=${config.version}`;
  script.setAttribute('data-prog', '');

  document.body.appendChild(script);
}

const loadStyleSheet = (src) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `./css/${src}.css?v=${config.version}`;
  link.setAttribute('data-prog', '');

  document.head.appendChild(link);
}
