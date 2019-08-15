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
const firstName =prompt('what is your first name');
let lastName = prompt('what is your last name')
console.log('my first name is ${firstName} ');
alert (`hello ${lastName}`);
let birthday = prompt('when is your birthday');

confirm (`is this your birthday ${birthday}`);
alert (birthday);
let fixDate = new Date(birthday);

alert(fixDate);



