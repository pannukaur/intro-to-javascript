// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }
// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(90);
// fToC(90);

// function employ(temprature, scale)
// if ( temprature == 'fahrenheit' ) {
//     return fahrenheit;
//   } else {
//     return 'fahrenheit not defined';
//   }

// sevenday

// const h1 = document.querySelector('h1').textContent;
//   console.log(h1);

//   const h1 = document.querySelector('h1');
//   console.log(h1); 
//   //   console.log(h1.textContent);
//  let message = h1.innerHTML ='I am message';


//  const container = document.querySelector(' container');
//  console.log(container);

//  const h1 = document.querySelector('h1');
//  function globalListItems() {
//     //  creat ul
//     const ul =document.createElement('ul');
//     // console.log('unorder list', ul);
//     // create list
//     const li = document.createElement('li')
//     // console.log('list item', li);
//     // attribute/class/id
//     li.className =['list-group-item', 'list-group-item-info'];
//     // console.log('li with class',li);
//     li.innerText = 'i am list item';
//     li.id ='mtSpecialItem';
//     const image = document.createElement('img');
//     image.setAttribute('alt', 'i am empthy image');
//     console.log(image);
//     ul.appendChild(li);
//     // console.log('compleate ul', ul);
//     container.appendChild(ul);

//  }
//  globalListItems();

// const container = document.querySelector('container');

// function globalListItems(){

//     const image = document.createElement('img');
//     image.className ""
//     image.setAttribute('src',../img/'hero.png');
//     image.setAttribute('alt','');
//     container.appendChild('image');

//     const icons = document.createElement('i');
//     icons.className('fab fa-facebook');

const container = document.querySelector('.container');
const button = document.createElement('button');
button.id = "triggerMagic";
button.className = "btn btn-primary btn-sm text-uppercase center_center";
button.innerHTML = "click for some magic";
container.appendChild(button);


let triggered = () => {
    button.addEventListener('click', () => {
        poster();
    });
}

function poster() {
    //create a card parent div that will have: h1, img, p, icon>link
    const panelDiv = document.createElement('div');
    panelDiv.className = 'panel panel-default col-md-6 text-center';
    const wrapper = document.createElement('div');
    wrapper.className = 'col-md-4';
    const h1 = document.createElement('h1');
    h1.className = "panel-title";
    const image = document.createElement('img');
    image.className = 'img-responsive';
    image.setAttribute('src', '../img/hero_2.jpeg');
    image.setAttribute('alt', 'Groceries');
    const p = document.createElement('p');
    p.innerText = 'Grocery stores serve wonderful produce to the world of tomorrow.';
    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'www.facebook.com');
    anchor.setAttribute('role', 'btn');
    const icon = document.createElement('i');
    icon.className = 'fab fa-facebook';

    wrapper.appendChild(h1);
    wrapper.appendChild(image);
    wrapper.appendChild(p);

    anchor.appendChild(icon);
    wrapper.appendChild(anchor);
    panelDiv.appendChild(wrapper);
    container.appendChild(panelDiv);


}

triggered();
    
    
}
globalListItem();

const div = document.createElement('div');




