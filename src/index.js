import './style.scss';

const { document } = global;

/*
// Todo: In progress...
function storeBucket() {
  if (typeof (Storage) !== 'undefined') {
    // Code for localStorage/sessionStorage.
  } else {
    // Sorry! No Web Storage support..
  }
}
*/

const addBucketItem = (li, ul) => ul.appendChild(li);

function makeBucketItem(text) {
  const li = document.createElement('li');
  const createdDate = new Date();
  const fullText = `${text}\t...\t${createdDate}`;
  const textNode = document.createTextNode(fullText);
  li.appendChild(textNode);

  return li;
}

function btnHandler(e) {
  e.preventDefault();

  const ul = document.querySelector('.js-bucketlist');
  const inputText = document.querySelector('.js-inputText').value;
  const li = makeBucketItem(inputText);

  addBucketItem(li, ul);
}

function init() {
  const btn = document.querySelector('.js-btn');
  btn.addEventListener('click', btnHandler);

  document.querySelector('.js-bucketlist').addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      console.log(ev.target);
    }
  }, false);
}

init();
