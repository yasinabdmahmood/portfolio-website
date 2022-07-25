//create ul element
function createList(){
    let el=document.createElement('div');
    el.id='div-js'
let ul=document.createElement('ul');
ul.id='ul-js'
let arr=['Portfolio','About me','Contact']
let link=['section1','section2','section3'] /*this needs to be modified
it should contain the Id of sections*/

let li=document.createElement('li');
li.className='list-item-js  close-tap';
let img=document.createElement('img')
img.setAttribute('src','/img/x-lg.svg')
img.className='close-tap-img'
li.appendChild(img)
ul.appendChild(li)
for(let i of arr){
    let li=document.createElement('li');
    li.className='list-item-js';
    let a=document.createElement('a');
    a.setAttribute('href','#'+i)
    let text = document.createTextNode(i);
    a.appendChild(text)
    li.appendChild(a);
    ul.appendChild(li)
}

el.appendChild(ul);

document.body.appendChild(el);
let cssLink=document.createElement('link');
cssLink.setAttribute('rel','stylesheet');
cssLink.setAttribute('href','styles2.css'); //modify
document.head.appendChild(cssLink)

el.onclick=()=>{
    el.remove();
    cssLink.remove();
    
}
}

document.getElementById('humberger-icon').onclick = createList;  //modify



