const body = document.body;
const container =document.createElement('div');
container.className = 'container text-center';

//      test = body.appendChild(container);
// console.log('my html:', test);

const row = document.createElement('main');
row.className ='row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-2 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);


// form tag>input-email(email)-input:subject(text)-textarea-button:submit
// const form = document.createElement('form');
// const inputEmail = document.createElement('input');
// inputEmail.setAttribute('type','email');
// inputEmail.setAttribute('name','email'); 
// inputEmail.setAttribute('class','form-control');
// inputEmail.setAttribute('placeholder','my input Email');
// form.className = 'input-type: email';
// form.appendChild(inputEmail);

// content.appendChild(form);

// function globalFormElements(element,elementType,elementName, elementClass, elementPlaceholder){
//     const newElement = document.createElement(element);

//     newElement.setAttribute('type',elementType);
//     newElement.className = elementClass;
//     newElement.setAttribute('name',elementName);
//     newElement.setAttribute('placeholder',elementPlaceholder);
//      return newElement;
// }
//     const textAreaElement =(name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
//     const element =document.createElement('textarea');
//     element.setAttribute('type', 'text');
//     element.className = elementClass;
//     element.setAttribute('name', 'name');
//     element.setAttribute('placeholder', 'placeholder');
//     element.setAttribute('cols', 'cols');
//     element.setAttribute('rows', 'rows');
//     return element;
// }
//     console.log(globalFormElements('input','text','example','form-control bg-primary','type text example here'));
     
//     console.log(globalFormElements('textarea','text','message','bg-danger','please,let us know your concern here.'));


function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementId) {
    //element : create the type of element you seek
    const newElement = document.createElement(element);
    newElement.setAttribute('type', elementType);
    newElement.className = elementClass;
    newElement.setAttribute('name', elementName);
    newElement.setAttribute('placeholder', elementPlaceholder);
    newElement.id = elementId;
    return newElement;
}
const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
    const element = document.createElement('textarea');
    element.setAttribute('type', 'text');
    element.className = elementClass;
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholder);
    element.setAttribute('cols', cols);
    element.setAttribute('rows', rows);
    element.id = elementId;
    return element;
}

const labelGenerator = (forElement, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', forElement);
    label.innerText = text;
    return label; 
}
console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please, let us know your concerns here.' ));

const form = document.createElement('form');
const inputEmail = globalFormElements('input', 'email', 'email', 'form-control', 'Enter email here');
const inputSubject = globalFormElements('input', 'text', 'subject', 'form-control', 'Enter Subject here');
const textArea = textAreaElement('message', 'Your message here...', 'form-control', 'message', 5, '');
const button = document.createElement('button');
button.className = 'btn-primary btn';
button.setAttribute('type', 'submit');
button.innerText = 'Submit Now';

const labelForEmail = labelGenerator('email', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolor?');

const labelForSubject = labelGenerator('subject', 'Subject');
const labelForTextArea = labelGenerator('message', 'Message ');

const formGroup = document.createElement('div');
formGroup.className = 'form-group';

//append labels to inputs

formGroup.appendChild(labelForEmail);
formGroup.appendChild(inputEmail);
formGroup.appendChild(labelForSubject);
formGroup.appendChild(inputSubject);
formGroup.appendChild(labelForTextArea);
formGroup.appendChild(textArea);

form.appendChild(formGroup);
