// https://dog.ceo/api/breeds/list/all

function playWithApi (){
    const url = 'https://dog.ceo/api/breed/hound/list'
    fetch(url);
    console.log(url);
}
playWithApi();  



// const exampleJson = ' {"name": "Kaur", "age": 26}';
// const exampleTwo = ' {"random": 7, "pharase": "this is cool day"}';
// const exampleparse = JSON.parse(exampleJson);
// wrapper.innerText = exampleJson.name;
// // const exampleStringify = JSON.stringify;
// console.log(exampleTwo);



function practiceScope(){
    let random = 'Inside scope';

    const phrase = function (){
        console.log(random)
    }
    return phrase();
}
   let practiceOutside = practiceScope();



// //  todo : *optional * creat class that will call in a basis constructer
// //  call api and use al least one paramater placeholder so you can change api value at random
// //  one random fuction to do somrthing that information


// class AboutMe{
//     constructor (name, age, pet){
//         this.name = name;
//         this.age = age;
//         this.pet = pet;
//     }
// }
// AboutMe.prototype.myDog = function (){
//     const url= `https://dog.ceo/api/breed/${this.petbreed}/image/random`
//     fetch(url)
//     .then( (TransformJson) => {
//         return TransformJson.json;
//     })
//     then ( (breedData) => {
//         console.log(breedData);
//         const image = document.createElement('img');
//         image.setAttribute('src', breedData.message);
//         wrapper.appendChild(image);
//     })
//     .catch( (err) => {
//         console.log(err);
//     })
    
// }
// const kaur = new AboutMe ('kaur', 24, 'preet');


class procuce{
    constructor(name, price, organic){
        this.name = name;
        
        this.name = price;
        this.organic = organic;

        

    }
}
const cherry = new preduce ('cherry', 2.20, false);
console.log(cherry);
const preduce = '{"chery": {"price": 2.20, "organic": false}}"orange" {"price": 1.99, "organic": true}';
const parsed = JONS.parse(preduce);
console.log(preduce);
console.log(parsed.organic);





