const btn = document.getElementById('btn')
const nav = document.getElementById('menu')
const btn2= document.getElementById('registerbutton')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  //nav.classList.toggle('flex')
  nav.classList.toggle('hidden');

})
/*

const accordionItems = [
  {
      id: 'kg-head',
      triggerEl: document.querySelector('#kg-head'),
      targetEl: document.querySelector('#kg-body'),
      active: true
  },
  {
      id: '1-head',
      triggerEl: document.querySelector('#1-head'),
      targetEl: document.querySelector('#1-body'),
      active: false
  },
  {
      id: '2-head',
      triggerEl: document.querySelector('#2-head'),
      targetEl: document.querySelector('#2-body'),
      active: false
  }
];

// options with default values
const options = {
  alwaysOpen: true,
  activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
  inactiveClasses: 'text-gray-500 dark:text-gray-400',
  onOpen: (item) => {
      console.log('accordion item has been shown');
      console.log(item);
  },
  onClose: (item) => {
      console.log('accordion item has been hidden');
      console.log(item);
  },
  onToggle: (item) => {
      console.log('accordion item has been toggled');
      console.log(item);
  },
};

const accordion = new Accordion(accordionItems, options);

accordion.open('accordion-example-heading-2');

// close accordion item based on id
accordion.close('accordion-example-heading-2');

// toggle visibility of item based on id
accordion.toggle('accordion-example-heading-3');

*/


const accordionItems = [
  {
      id: 'accordion-example-heading-1',
      triggerEl: document.querySelector('#accordion-example-heading-1'),
      targetEl: document.querySelector('#accordion-example-body-1'),
      active: true
  },
  {
      id: 'accordion-example-heading-2',
      triggerEl: document.querySelector('#accordion-example-heading-2'),
      targetEl: document.querySelector('#accordion-example-body-2'),
      active: false
  },
  {
      id: 'accordion-example-heading-3',
      triggerEl: document.querySelector('#accordion-example-heading-3'),
      targetEl: document.querySelector('#accordion-example-body-3'),
      active: false
  }
];

// options with default values
const options = {
  alwaysOpen: true,
  activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
  inactiveClasses: 'text-gray-500 dark:text-gray-400',
  onOpen: (item) => {
      console.log('accordion item has been shown');
      console.log(item);
  },
  onClose: (item) => {
      console.log('accordion item has been hidden');
      console.log(item);
  },
  onToggle: (item) => {
      console.log('accordion item has been toggled');
      console.log(item);
  },
};

const accordion = new Accordion(accordionItems, options);

accordion.open('accordion-example-heading-2');

// close accordion item based on id
accordion.close('accordion-example-heading-2');

// toggle visibility of item based on id
accordion.toggle('accordion-example-heading-3');