const container = document.createElement('main');
// container.className = 'container';
container .classList.add('container');
// container.classList.remove('container');

document.body.appendChild(container);
container.innerHTML = '<h1>Hello</h1>';
console.log(container);

function movieQuote() {
alert('I know what you did last summer ...');
}
let timer;
function callQuote() {
 timer = setInterval(movieQuote,3000);
    // console.log('triggered');
}
function stopFromRunning () {
    let stop = clearInterval(1000);
}
const button = document.createElement('button');
button.setAttribute('onclick','callQuote()');
button.innerHTML ='click for a movie quote';
button.className = 'btn btn-primary btn-lg';
container.appendChild(button);
 

const stopButton = document.createElement('button');
stopButton.className = 'alert alert-danger border-danger border';
stopButton.setAttribute('onclick','stopFromRunning()');
stopButton.innerHTML ='STOP';

button.addEventListener('click', () =>  {
sessionStorage.setItem('temporary', 'Every problem is tempreary');
sessionStorage.getItem('temporary');
localStorage.setItem('death', 'Expect for death-Grace');
localStorage.getItem('death');
    // container.appendChild(stopButton);
});

// anon function 
 
// const example = function(param){
//     return test ()
    
// }
// function test (testparam){
//     alert(testparam);
// }
//  example('ok i see what you did there ');