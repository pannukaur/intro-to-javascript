// const taskOne = prompt('first task');
// const taskTwo = prompt('second task');
// const taskThree = prompt('last task');
// let arrayOfTasks = [taskOne, taskTwo, taskThree];
// let secondarrayOfTasks = [
// [taskOne],
//  [ taskTwo],
//  [taskThree]
// ];
// console.log(arrayOfTasks);
// console.log('second one: ',secondarrayOfTasks );
// const limit= 3;{
// for (j-0; j< limit; j++);
// // console.log(j);
// arrayOfTasks[j].push (`this will iake ${math.floor(math.random() * 15)}`);
// console.log(secondarrayOfTasks[j]);
// }
//  day four end
//  day five start
// let example = function (val){
// console.log();
// }

// function exampleName() {
//     console.log('hello there');
// }
// example  
// let turnValueUppercase = val => console.log(val.toUpperCase());
// turnValueUppercase('hi');
//
// turnValueUppercase('hello');
// function turnValueUppercase (val) {
// console.log(val.toUpperCase());
// }


// 
// let turnValueUppercase = val => console.log(val.toUpperCase());
// const multiplyValue =( arg1, arge2) => {return arg1 * arg2};
// turnValueUppercase('hi');
// console.log(multiplyValue( 1,2));{
// }


// 
// let turnValueUppercase = val => console.log(val.toUpperCase());
// const multiplyValue =( arg1, arge2) =>  arg1 * arg2;
// turnValueUppercase('hi');
// console.log(multiplyValue( 1,2));
// function turnValueUppercase(val){
//     console.log(val.toUpperCase());
// }


// creat  
// let mane =[
//     'first',
//     'second',
//     'third'
// ];
// // creat a greeting
// const greeting = name => `good evening, ${name}`;
// // first resoult
// console.log (`the array of name ${name}`,`greeting function value: ${greeting ('example')}`);


// // loopthrug name and add greeting function
// const limit =3;
// for (j=0; j < limit; j++){
//     console.log(greeting(name[j]));
// }


// grabe element from html grocery item
// const h1 = document.getElementById('greeting');
// const myList = document.getElementById('grocryList');
// const listItem = document.getElementById('groceryItem');
// const mylist = document.getElementById('gerGroceryItem');
// --------

const greeting = document.getElementById('greeting');
const grocryList = document.getElementById('grocryList');
const groceryItem = document.getElementById('groceryItem');
const getGroceryItem = document.getElementById('gerGroceryItem');
let arrayOfGroceryItem = [];
greeting.innerHTML = 'grocery item';

// /
function addGroceryItem(arr, value){
    arr.push(value);
}
    function ejectGroceryItemToList(val){
        groceryItem.innerHTML = val;
        for(grocery =0; grocery< 2; grocery ++){
            groceryItem.innerHTML=[grocery];

        }
    }
    addGroceryItem(arrayOfGroceryItem, 'Testing');
    addGroceryItem(arrayOfGroceryItem, 'choklate');
    console.log(arrayOfGroceryItem);
    ejectGroceryItemToList(arrayOfGroceryItem);



