
// Selecting elements
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');
const importantCheckbox = document.getElementById('important-checkbox');
const submitButton = document.getElementById('submit-button');
const noteList = document.getElementById('note-list');

// Adding an event lstener to button and preventing page refresh
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
  const name = nameInput.value;
  const message = messageInput.value;
  const important = importantCheckbox.checked;

  //Check for empty fields
  if (name === '' || message === '') {
    alert('Please enter your name and message');
    return;
  }

  //Getting time and format to string
  const now = new Date();
  const dateString = now.toLocaleString('fi-FI');

  //Create elements and add classes
  const note = document.createElement('div');
  note.classList.add('note-container');
  
  const noteText = document.createElement('p');
  const boldText = document.createElement('span');
  boldText.textContent = name;
  const text = document.createTextNode(': ' + message);
  noteText.appendChild(boldText);
  noteText.appendChild(text);
  note.appendChild(noteText);
  
  if (important) {
    noteText.classList.add('important');
  }
  
  const time = document.createElement('time');
  time.textContent = dateString;
  note.appendChild(time);
  
  noteList.appendChild(note);

  noteList.appendChild(note);

  //Empty values
  nameInput.value = '';
  messageInput.value = '';
  importantCheckbox.checked = false;

});
