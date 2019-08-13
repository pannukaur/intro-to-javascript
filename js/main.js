let question;
 function myfunk(){
    let question = prompt('tell me your name.');
    console.log('your name is ' + question);

} 
// console.log('js class');
// onsole.log('js class is intresting')
// console.log('best class');
// console.log('hellow')

function grabElementAndSpitOutValue()
{
    // det element from index
    const MAIN_DIV=document.getElementById('mainDiv')
    // write out in html
    MAIN_DIV.innerHTML = 'hey , I am here';
    // excute
    console.log('this hit.');

}