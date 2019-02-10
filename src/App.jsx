// 1- Implement a Greeting function that takes an object with a name prop
// and returns a div element containing a greeting.
function Greeting({ name }) {
  // implement
  return document.createElement('div');
}

const greet = Greeting({ name: 'Luke' });
document.querySelector('#target1').appendChild(greet);

// DESIRED RESULT IN THE DOM for exercise 1:
// <div id="target1">
//   <div class="greeting">
//     Hello, Luke
//    </div>
// </div>


// 2- Implement a ButtonMaker function that takes an object
// with a label prop and a callback prop and returns a button.
// Clicking on this button should execute the callback.
function ButtonMaker({ label, callback }) {
  // implement
  return document.createElement('button');
}

const button = ButtonMaker({
  label: 'Click me!',
  callback: () => console.log('You clicked!'),
});
document.querySelector('#target2').appendChild(button);

// DESIRED RESULT IN THE DOM for exercise 1:
// <div id="target2">
//   <button id="theButton" class="button">Click me!</button>
// </div>


// 2- Implement a NavMaker function that takes an object with a links prop
// and returns a nav element containing links.
function NavMaker({ links }) {
  // implement
  return document.createElement('nav');
}

const links = [
  {
    href: 'https://google.com',
    innerText: 'Google',
  },
  {
    href: 'https://wikipedia.org',
    innerText: 'Wikipedia',
  },
  {
    href: 'https://bing.com',
    innerText: 'Bing',
  },
];

const nav = NavMaker({ links });
document.querySelector('#target3').appendChild(nav);

// DESIRED RESULT IN THE DOM for exercise 2:
// <div id="target3">
//   <nav>
//     <a href="https://google.com">Google</a>
//     <a href="https://wikipedia.org">Wikipedia</a>
//     <a href="https://bing.com">Bing</a>
//   </nav>
// </div>
