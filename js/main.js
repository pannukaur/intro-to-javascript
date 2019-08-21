// ar firstName='kanwal'
// var age = 37;

// const firsName ='Kanwal';
// firstName = 'dimple';

// old way
// console.log("My name is " + firstName + "my ge is" + age);
// better way 
// console.log('My name is ${firstName} and my age is ${age}');
// alert (`hello, i am ${firstName}`); 
// console.log('firstName');
// const birthday ='25/01/1982';
// let fixDate = new Date() ;
// console.log(fixDate);
// let hello = new string(1);
// alert('hello');
// console.log(typeof(hello));
// const firstName = "dimple";
// console.log(firstName.length);
// const topThreeMovies = ['kids', 'romantic','immotional'];
// console.log(topThreeMovies);
// console.log(`my second top movies is: ${topThreeMovies[1]}`);

// take home day two
// const firstName =prompt('what is your first name');
// let lastName = prompt('what is your last name')
// console.log('my first name is ${firstName} ');
// alert (`hello ${lastName}`);
// let birthday = prompt('when is your birthday');

// confirm (`is this your birthday ${birthday}`);
// alert (birthday);
// let fixDate = new Date(birthday);

// alert(fixDate);

// day three
// const exampleString ='i am a string';
// const exampleObjectString = new String('1');
// const anotherString ='i am string';
// const H1 = document.getElementById('greeting');

// function checkExample() {
// if(exampleString == anotherString){
//  consol e.log('yes, ${exampleString} and ${anotherString} not equal');
// }else{
//     console.log('sorry, they are not equal at all');

// }
// }
// checkExample();

// const LuckyNumber = 20;
// if (LuckyNumber <= 15 || LuckyNumber > 11){
//     console.log('lucky number ${LuckyNumber}' );
// }else{
//     console.log('sorry, not lucky.');
// }

//done------  

// let a = 5;
// let b =2;
// let result = a += b;
// console.log(result);
// done--------
// 

//  let a = '5.99';
//  let transformMe = parseFloat(a, 2);
//  console.log(`Before: ${a}, After: ${transformMe}`, typeof(a), typeof(transformMe));
// done-------
// 

// let hello = 'Hello ';
// let there ='there!';
// let sentence = hello += there;
// console.log(sentence);
// done

// let valueNan = 'i am needed nan';
// let testNan = isNaN(valueNan);
// testNan ? console.log('this is true') : console.log('this is false');

// ---
// if (testNan === true)
// ---

// swich statement
let askColor = prompt('pick up color : red, orange,blue. Await the following response....');
switch(askColor){
    case 'red':
        H1.innerHTML = `you chose ${askColor}.. which reminds me of `;
        break;
        case 'orange':
            H1:innerHTML =`you chose ${askColor}..default`;
          case  'blue':
              H1:innerHTML =`you chose ${askColor}..remind `;
          break;
          default:
              H1:innerHTML =`not follow the roule`;
}
// ---
// let  age = 18;
// if (age < 18){
//     alert('they are not old enough');
// }else {
//     console.log('they are old enough')
// }

// const firstName = prompt('what is your name ?');
// console.log(`my first name is ${firstName}`);
// let askColor = prompt('pick up color : red, orange,yellow, green, blue, pink,purple, white, black, greay');
// switch (askColor) {
//     case 'red'
//         H1:innerHTML("red");
//         break;

// }




// const firstName =prompt('what is your first name');
// let lastName = prompt('what is your last name')
// console.log('my first name is ${firstName} ');
// alert (`hello ${lastName}`);
// let birthday = prompt('when is your birthday');
