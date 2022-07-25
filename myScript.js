// create ul element
function createList() {
  const el = document.createElement('div');
  el.id = 'div-js';
  const ul = document.createElement('ul');
  ul.id = 'ul-js';
  const arr = ['Portfolio', 'About me', 'Contact'];
  const arr2 = ['Portfolio', 'About-me', 'Contact'];

  const li = document.createElement('li');
  li.className = 'list-item-js  close-tap';
  const img = document.createElement('img');
  img.setAttribute('src', '/img/x-lg.svg');
  img.className = 'close-tap-img';
  li.appendChild(img);
  ul.appendChild(li);
  for (let i = 0; i < arr.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'list-item-js';
    const a = document.createElement('a');
    a.setAttribute('href', `#${arr2[i]}`);
    const text = document.createTextNode(arr[i]);
    a.appendChild(text);
    li.appendChild(a);
    ul.appendChild(li);
  }

  el.appendChild(ul);

  document.body.appendChild(el);
  const cssLink = document.createElement('link');
  cssLink.setAttribute('rel', 'stylesheet');
  cssLink.setAttribute('href', 'styles2.css'); // modify
  document.head.appendChild(cssLink);

  el.onclick = () => {
    el.remove();
    cssLink.remove();
  };
}

document.getElementById('humberger-icon').onclick = createList; // modify
