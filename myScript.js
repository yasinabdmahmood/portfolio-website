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
  img.setAttribute('src', './img/x-lg.svg');
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

document.getElementById('humberger-icon').onclick = createList;

/// /////////////////////////////////////////////////////////////////////

const projects = [
  {
    title: 'Multi Post Stories',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'Profesional Art Printing Data',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'Data Dashboard Healthcare',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'Website Protfolio ',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'To do list',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'Uber Taxi App',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  }, {
    title: 'Calculator',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
];

function createProjectPopUp() {
  const x = parseInt(this.id[4], 10) - 1;
  const blurryBackground = document.createElement('div');
  blurryBackground.setAttribute('class', 'blurry-background');

  const mainwindow = document.createElement('div');
  mainwindow.setAttribute('class', 'main-window ');
  blurryBackground.appendChild(mainwindow);
  const div1 = document.createElement('div');
  // div1-p2w4
  div1.setAttribute('class', 'div1-p2w4');
  mainwindow.appendChild(div1);
  const title = document.createElement('h1');
  // title-p2w4
  title.setAttribute('class', 'title-p2w4');
  const titleText = document.createTextNode(projects[x].title);
  title.appendChild(titleText);
  div1.appendChild(title);
  const closetapimg = document.createElement('img');
  // close-p2w4
  closetapimg.setAttribute('class', 'close-p2w4');
  closetapimg.setAttribute('src', 'img/x-lg.svg');
  closetapimg.setAttribute('id', 'btn-d2'); // modify
  div1.appendChild(closetapimg);
  closetapimg.onclick = () => blurryBackground.remove();
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'div2-p2w4');
  mainwindow.appendChild(div2);
  const tech = projects[x].technologies;
  for (let i = 0; i < 3; i += 1) {
    const a = document.createElement('a');
    // tech-p2w4
    a.setAttribute('class', 'tech-p2w4');
    const buttontext = document.createTextNode(tech[i]);
    a.appendChild(buttontext);
    div2.appendChild(a);
  }
  const div3 = document.createElement('div');
  div3.setAttribute('class', 'div3-p2w4');
  mainwindow.appendChild(div3);

  const projectimg = document.createElement('img');
  projectimg.setAttribute('class', 'feature-img ');
  projectimg.setAttribute('src', projects[x].featureImg);
  div3.appendChild(projectimg);

  const div31 = document.createElement('div');
  div31.setAttribute('class', 'div31-p2w4 ');
  div3.appendChild(div31);

  const discription = document.createElement('p');
  // discription-p2w4
  discription.setAttribute('class', 'discription-p2w4');
  const discriptiontext = document.createTextNode(projects[x].discription);
  discription.appendChild(discriptiontext);
  div31.appendChild(discription);

  const div311 = document.createElement('div');
  /// /div311-p2w4
  div311.setAttribute('class', 'div311-p2w4');
  div31.appendChild(div311);

  const alastbutton1 = document.createElement('a');
  alastbutton1.setAttribute('href', projects[x].linkToLive);
  // bg-orange
  alastbutton1.setAttribute('class', ' bg-orange');
  const alastbuttontext = document.createTextNode('See live ');
  alastbutton1.appendChild(alastbuttontext);
  const alastbutton1img = document.createElement('img');
  alastbutton1img.setAttribute('src', 'img/img-p2-js.svg');
  alastbutton1.appendChild(alastbutton1img);
  div311.appendChild(alastbutton1);

  const alastbutton2 = document.createElement('a');
  alastbutton2.setAttribute('href', projects[x].linkToSource);
  alastbutton2.setAttribute('class', ' bg-orange');
  const alastbuttontext2 = document.createTextNode('See source ');
  alastbutton2.appendChild(alastbuttontext2);
  const alastbutton2img = document.createElement('img');
  alastbutton2img.setAttribute('src', 'img/img-p2-js-2.svg');
  alastbutton2.appendChild(alastbutton2img);
  div311.appendChild(alastbutton2);

  document.body.insertBefore(blurryBackground, document.body.firstChild);
}

for (let i = 1; i <= 7; i += 1) {
  document.getElementById(`card${i.toString()}`).onclick = createProjectPopUp;
}

/// ////////Add Javascript form validator////////////////

let form = null;

if (window.innerWidth <= 768) {
  form = document.getElementById('mobile-form');
} else {
  form = document.getElementById('desktop-form');
}

const { email } = form.elements;
let message = null;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = email.value;

  if (emailValue === emailValue.toLowerCase()) {
    message = '';
    form.submit();
  } else {
    message = 'please only enter lower case characters for email field';
  }

  form.querySelector('.error').innerHTML = message;
});

/// //////// Storage Project /////////////////
const id = ['full-name', 'email', 'textarea', 'fname', 'lname', 'Email-Address', 'text-area'];
let data = {
  mobileFullName: '', mobileEmail: '', mobileText: '', desktopFirstName: '', desktopLastName: '', desktopEmail: '', desktopText: '',
};
function getInputFields() {
  data.mobileFullName = document.getElementById('full-name').value;
  data.mobileEmail = document.getElementById('email').value;
  data.mobileText = document.getElementById('textarea').value;
  data.desktopFirstName = document.getElementById('fname').value;
  data.desktopLastName = document.getElementById('lname').value;
  data.desktopEmail = document.getElementById('Email-Address').value;
  data.desktopText = document.getElementById('text-area').value;
  return data;
}

function setInputFields() {
  document.getElementById('full-name').value = data.mobileFullName;
  document.getElementById('email').value = data.mobileEmail;
  document.getElementById('textarea').value = data.mobileText;
  document.getElementById('fname').value = data.desktopFirstName;
  document.getElementById('lname').value = data.desktopLastName;
  document.getElementById('Email-Address').value = data.desktopEmail;
  document.getElementById('text-area').value = data.desktopText;
}

function copyLocalStorageToInputFields() {
  data = JSON.parse(localStorage.getItem('data'));
  setInputFields();
}

function copyInputFieldsToLocaStorage() {
  data = getInputFields();

  localStorage.setItem('data', JSON.stringify(data));
  copyLocalStorageToInputFields();
}

if (!localStorage.getItem('data')) {
  copyInputFieldsToLocaStorage();
} else {
  copyLocalStorageToInputFields();
}

for (let i = 0; i < id.length; i += 1) {
  document.getElementById(id[i]).onchange = copyInputFieldsToLocaStorage;
}
