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

////////////////////////////////////////////////////////////////////////
function createProjectPopUp(){
  let blutty_background=document.createElement('div');
  blutty_background.setAttribute('class','blurry-background');

  let main_window=document.createElement('div');
  main_window.setAttribute('class','main-window p-3');
  blutty_background.appendChild(main_window)
  let div1=document.createElement('div');
  div1.setAttribute('class','d-flex flex-shrink-1  p-1 p-md-1 m-1 m-md-1 justify-content-between  align-items-center ');
  main_window.appendChild(div1);
  let title=document.createElement('h1');
  title.setAttribute('class','mb-4 mb-md-1  h2  fw-bold ')
  let titleText=document.createTextNode('Multi Post Stories');
  title.appendChild(titleText);
  div1.appendChild(title);
  let close_tap_img=document.createElement('img');
  close_tap_img.setAttribute('css','img-fluid  h-50 align-self-start ');
  close_tap_img.setAttribute('src','img/x-lg.svg');
  close_tap_img.setAttribute('id','btn-d2'); //modify
  div1.appendChild(close_tap_img);
  close_tap_img.onclick=()=>blutty_background.remove();
  let div2=document.createElement('div');
  div2.setAttribute('class','d-flex mb-md-5 flex-shrink-1');
  main_window.appendChild(div2);
  let tech=['html','bootstrap','ruby on rail'];
  for(let i=0;i<3;i+=1){
      let a=document.createElement('a');
      a.setAttribute('class','btn  m-2 border-dark rounded-0 lead h1');
      let button_text=document.createTextNode(tech[i]);
      a.appendChild(button_text)
      div2.appendChild(a);
  }
  let div3=document.createElement('div');
  div3.setAttribute('class','img-p flex-shrink-1 mt-3 mt-md-1 ');
  main_window.appendChild(div3);

  let project_img=document.createElement('img')
  project_img.setAttribute('css','img-p2-js flex-grow-1 ');
  project_img.setAttribute('src','/img/card1-project-img.png');
  div3.appendChild(project_img);

  let div3_1=document.createElement('div');
  div3_1.setAttribute('class','d-flex flex-grow-1 justify-content-between  flex-column ps-md-2   p-b-p2-js ');
  div3.appendChild(div3_1);

  let discription=document.createElement('p');
  discription.setAttribute('class','mx-3 mt-3 mt-md-1');
  let discription_text=document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum qui illo eveniet eligendi nisi cupiditate accusantium in, perspiciatis autem odit beatae cumque temporibus iure et praesentium excepturi unde voluptatibus distinctio. Vel, odio! Assumenda sed atque sapiente quaerat, fugiat quibusdam accusantium ducimus modi nulla odio ipsam veniam quas perferendis commodi iusto!');
  discription.appendChild(discription_text);
  div3_1.appendChild(discription);

  let div3_1_1=document.createElement('div');
  div3_1_1.setAttribute('class','row mx-1   justify-content-start');
  div3_1.appendChild(div3_1_1);

  let a_last_button1=document.createElement('a');
  a_last_button1.setAttribute('class','btn col-5  col-md-3  me-4 me-md-1  py-md-2 text-white fw-md-bold  rounded-0 col-4 bg-orange');
  let a_last_button_text=document.createTextNode('See live ');
  a_last_button1.appendChild(a_last_button_text);
  let a_last_button1_img=document.createElement('img');
  a_last_button1_img.setAttribute('src','img/img-p2-js.svg');
  a_last_button1.appendChild(a_last_button1_img);
  div3_1_1.appendChild(a_last_button1)

  let a_last_button2=document.createElement('a');
  a_last_button2.setAttribute('class','btn col-5 col-md-3 ms-4 ms-md-1  py-md-2 text-white fw-md-bold rounded-0 col-4 bg-orange');
  let a_last_button_text2=document.createTextNode('See source ');
  a_last_button2.appendChild(a_last_button_text2);
  let a_last_button2_img=document.createElement('img');
  a_last_button2_img.setAttribute('src','img/img-p2-js-2.svg');
  a_last_button2.appendChild(a_last_button2_img);
  div3_1_1.appendChild(a_last_button2)









  document.body.insertBefore(blutty_background,document.body.firstChild)
}

document.getElementById('card1').onclick=createProjectPopUp; 
