const avatar = document.querySelector('.avatar'),
      name = document.querySelector('.name'),
      timeCreated = document.querySelector('.timer-created'),
      commentContent = document.querySelector('.comment-content'),
      scoreNumber = document.querySelector('.number'),
      plusButton = document.getElementById('plus-button'),
      minusButton = document.getElementById('minus-button'),
      replyButton = document.querySelector('.reply-btn'),
      sendButton = document.querySelector('.send-btn'),
      firstComment = document.getElementById('one'),
      input = document.querySelector('.comment-input'),
      container = document.querySelector('.container'),
      replyInputCard = document.querySelector('.reply-content-desktop'),
      postedReply = document.querySelector('.comment-reply'),
      replyInput = document.querySelector('.reply-input');

      let scoreNumberConverted = parseInt(scoreNumber.innerText);

      console.log(replyInputCard);

// Fetch JSON data
// const getData = async () => {
//   const res = await fetch('./data.json');

//   const data = await res.json();
//   console.log(data);

// }

const generateCommentCard = () => {
  // Generate Reply Box Div
  const replyCommentCard = document.createElement('div');
  replyCommentCard.classList.add('comment-card');
  replyCommentCard.classList.add('reply-content-desktop');
  // Generate Avatar
  const replyCommentImage = document.createElement('img');
  replyCommentImage.id = 'current-avatar';
  replyCommentImage.src = './images/avatars/image-ramsesmiron.png';
  // Generate Reply Input
  const replyInputBox = document.createElement('input');
  replyInputBox.classList.add('comment-input');
  replyInputBox.type = 'text';

  // Generate Reply Send Button
  const replySendBtn = document.createElement('button');
  replySendBtn.innerText = 'Reply';
  replySendBtn.classList.add('send-btn');

  // Append Comment Box to Container
  container.appendChild(replyCommentCard);

  // Append child elements to comment box
  replyCommentCard.appendChild(replyCommentImage);
  replyCommentCard.appendChild(replyInputBox);
  replyCommentCard.appendChild(replySendBtn);

  // Reply Send Button Event Listener
  replySendBtn.addEventListener('click', e => console.log(e.target.previousElementSibling.value));
}

replyButton.addEventListener('click', generateCommentCard);


