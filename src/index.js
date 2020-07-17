import './style.scss';

const { document, localStorage } = global;

const bucketlist = JSON.parse(localStorage.getItem('BUCKETLIST_LS')) || { list: [] };

const addBucketItem = (li, ul) => ul.appendChild(li);

function clearTextBox() { document.querySelector('.js-inputText').value = ''; }

function alertMsg(msg) { document.querySelector('.js-alert').textContent = msg; }

function storeBucketList() {
  localStorage.setItem('BUCKETLIST_LS', JSON.stringify(bucketlist));
}

function updateTemporaryBucketList(text, createdDate) {
  const listData = {
    text,
    now: createdDate,
    isDone: false,
  };

  bucketlist.list.push(listData);
}

function makeBucketItem(text, createdDate) {
  const li = document.createElement('li');
  const fullText = `${text}\t...\t${createdDate}`;
  const textNode = document.createTextNode(fullText);
  li.appendChild(textNode);

  return li;
}

function btnHandler(e) {
  e.preventDefault();
  const inputText = document.querySelector('.js-inputText').value;
  if (inputText === '') {
    alertMsg('텍스트를 입력하세요!!');
    return;
  }
  alertMsg('');

  const ul = document.querySelector('.js-bucketlist');
  const createdDate = new Date();
  const li = makeBucketItem(inputText, createdDate);
  addBucketItem(li, ul);

  updateTemporaryBucketList(inputText, createdDate);
  storeBucketList();

  clearTextBox();
}

function init() {
  bucketlist.list.forEach((bucketItem) => {
    const { text, now } = bucketItem;
    const ul = document.querySelector('.js-bucketlist');
    const li = makeBucketItem(text, now);
    addBucketItem(li, ul);
  });

  const btn = document.querySelector('.js-btn');
  btn.addEventListener('click', btnHandler);

  document.querySelector('.js-bucketlist').addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      // console.log(ev.target);
    }
  }, false);
}

init();
