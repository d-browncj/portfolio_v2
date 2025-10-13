// Simple loader that loads tui.js regardless of environment
const CSS_PATH = 'css/tui.css';
const JS_PATH = 'js/tui.js';

function loadDependency(src, type, callback) {
  const head = document.head;
  const minStyle = document.getElementById('min-style');
  const element = type === 'script' ? document.createElement('script') : document.createElement('link');

  if (type === 'script') {
    element.type = 'text/javascript';
    element.src = src;
  } else {
    element.rel = 'stylesheet';
    element.href = src;
  }

  if (type === 'script' && callback != null) {
    element.onreadystatechange = callback;
    element.onload = callback;
  }

  head.appendChild(element);
  minStyle?.remove();
}

loadDependency(CSS_PATH, 'link');
loadDependency(JS_PATH, 'script', function() {
  init();
});
