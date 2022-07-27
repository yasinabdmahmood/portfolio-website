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
    title: 'Multi Post Stories',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'Multi Post Stories',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'Multi Post Stories',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'Multi Post Stories',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: './img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  },
  {
    title: 'Multi Post Stories',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featureImg: '.img/card1-project-img.png',
    technologies: ['html', 'bootstrap', 'ruby on rail'],
    linkToLive: 'https://github.com/',
    linkToSource: 'https://github.com/yasinabdmahmood/portfolio-website',

  }, {
    title: 'Multi Post Stories',
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
  mainwindow.setAttribute('class', 'main-window p-3');
  blurryBackground.appendChild(mainwindow);
  const div1 = document.createElement('div');
  div1.setAttribute('class', 'd-flex flex-shrink-1  p-1 p-md-1 m-1 m-md-1 justify-content-between  align-items-center ');
  mainwindow.appendChild(div1);
  const title = document.createElement('h1');
  title.setAttribute('class', 'mb-4 mb-md-1  h2  fw-bold ');
  const titleText = document.createTextNode(projects[x].title);
  title.appendChild(titleText);
  div1.appendChild(title);
  const closetapimg = document.createElement('img');
  closetapimg.setAttribute('css', 'img-fluid  h-50 align-self-start ');
  closetapimg.setAttribute('src', 'img/x-lg.svg');
  closetapimg.setAttribute('id', 'btn-d2'); // modify
  div1.appendChild(closetapimg);
  closetapimg.onclick = () => blurryBackground.remove();
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'd-flex mb-md-5 flex-shrink-1');
  mainwindow.appendChild(div2);
  const tech = projects[x].technologies;
  for (let i = 0; i < 3; i += 1) {
    const a = document.createElement('a');
    a.setAttribute('class', 'btn  m-2 border-dark rounded-0 lead h1');
    const buttontext = document.createTextNode(tech[i]);
    a.appendChild(buttontext);
    div2.appendChild(a);
  }
  const div3 = document.createElement('div');
  div3.setAttribute('class', 'img-p flex-shrink-1 mt-3 mt-md-1 ');
  mainwindow.appendChild(div3);

  const projectimg = document.createElement('img');
  projectimg.setAttribute('css', 'img-p2-js flex-grow-1 ');
  projectimg.setAttribute('src', projects[x].featureImg);
  div3.appendChild(projectimg);

  const div31 = document.createElement('div');
  div31.setAttribute('class', 'd-flex flex-grow-1 justify-content-between  flex-column ps-md-2   p-b-p2-js ');
  div3.appendChild(div31);

  const discription = document.createElement('p');
  discription.setAttribute('class', 'mx-3 mt-3 mt-md-1');
  const discriptiontext = document.createTextNode(projects[x].discription);
  discription.appendChild(discriptiontext);
  div31.appendChild(discription);

  const div311 = document.createElement('div');
  div311.setAttribute('class', 'row mx-1   justify-content-start');
  div31.appendChild(div311);

  const alastbutton1 = document.createElement('a');
  alastbutton1.setAttribute('href', projects[x].linkToLive);
  alastbutton1.setAttribute('class', 'btn col-5  col-md-3  me-4 me-md-1  py-md-2 text-white fw-md-bold  rounded-0 col-4 bg-orange');
  const alastbuttontext = document.createTextNode('See live ');
  alastbutton1.appendChild(alastbuttontext);
  const alastbutton1img = document.createElement('img');
  alastbutton1img.setAttribute('src', 'img/img-p2-js.svg');
  alastbutton1.appendChild(alastbutton1img);
  div311.appendChild(alastbutton1);

  const alastbutton2 = document.createElement('a');
  alastbutton2.setAttribute('href', projects[x].linkToSource);
  alastbutton2.setAttribute('class', 'btn col-5 col-md-3 ms-4 ms-md-1  py-md-2 text-white fw-md-bold rounded-0 col-4 bg-orange');
  const alastbuttontext2 = document.createTextNode('See source ');
  alastbutton2.appendChild(alastbuttontext2);
  const alastbutton2img = document.createElement('img');
  alastbutton2img.setAttribute('src', 'img/img-p2-js-2.svg');
  alastbutton2.appendChild(alastbutton2img);
  div311.appendChild(alastbutton2);

  document.body.insertBefore(blurryBackground, document.body.firstChild);
}

document.getElementById('card1').onclick = createProjectPopUp;
document.getElementById('card2').onclick = createProjectPopUp;
document.getElementById('card3').onclick = createProjectPopUp;
document.getElementById('card4').onclick = createProjectPopUp;
document.getElementById('card5').onclick = createProjectPopUp;
document.getElementById('card6').onclick = createProjectPopUp;
document.getElementById('card7').onclick = createProjectPopUp;
