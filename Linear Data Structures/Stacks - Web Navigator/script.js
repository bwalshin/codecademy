const { current } = require('@reduxjs/toolkit');
const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Start Page';

// ------------------------------
// Helper Functions
// ------------------------------
showCurrentPage = (action) => {
  console.log(`User Input: ${action}`);
  console.log(`Current Page: ${currentPage}`);
  console.log(`Back Page: ${backPages.peek()}`);
  console.log(`Next Page: ${nextPages.peek()}`);
}

newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()) {
    nextPages.pop();
  }

  showCurrentPage("NEW: ");
}

backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");
}

nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ");
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? ';

// ------------------------------
// User Interface Part 1
// ------------------------------
const finish = false;
const showBack = false;
const showNext = false;

showCurrentPage("DEAFULT: ");
while(finish === false) {
  let instructions = baseInfo;
  if(backPages.peek() != null) {
    instructions = `${instructions}, ${backInfo}.`;
    showBack = true;
  } else {
    showBack = false;
  }

  if(nextPages.peek() != null) {
    instructions = `${instructions}, ${nextInfo}.`;
    showNext = true;
  } else {
    showNext = false;
  }

  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);
}

// ------------------------------
// User Interface Part 2
// ------------------------------
