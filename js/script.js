const avatar = document.querySelector('.avatar'),
      name = document.querySelector('.name'),
      timeCreated = document.querySelector('.timer-created'),
      commentContent = document.querySelector('.comment-content'),
      scoreNumber = document.querySelector('.number'),
      plusButton = document.getElementById('plus-button'),
      minusButton = document.getElementById('minus-button'),
      replyButton = document.querySelector('.reply-btn'),
      firstComment = document.getElementById('one'),
      input = document.querySelector('.comment-input'),
      container = document.querySelector('.container');

      let scoreNumberConverted = parseInt(scoreNumber.innerText);

// Fetch JSON data
// const getData = async () => {
//   const res = await fetch('./data.json');

//   const data = await res.json();
//   console.log(data);

//   generateComment(data);
// }



// const generateComment = (data) => {

//   container.innerHTML =  
//   `
//   <div class="comment-card desktop">
//   <div class="score">
//     <object
//       data="images/icon-plus.svg"
//       type="image/svg+xml"
//       class="score-button"
//       id="plus-button"
//     ></object>
//     <span class="number">12</span>
//     <object
//       data="images/icon-minus.svg"
//       type="image/svg+xml"
//       class="score-button"
//       id="minus-button"
//     ></object>
//   </div>
//   <div class="comment-card-desktop-content">
//     <div class="comment-card-header">
//       <div class="card-header-left">
//         <img class="avatar" src="images/avatars/image-amyrobson.png" />
//         <span class="name">amyrobson</span>
//         <span class="time-created">1 month ago</span>
//       </div>
//       <div class="card-header-right">
//         <div class="reply">
//           <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
//               fill="#5357B6"
//               class="reply-btn"
//             />
//           </svg>
//           <span class="reply-text">Reply</span>
//         </div>
//       </div>
//     </div>
//     <p class="comment-content">
//       Impressive! Though it seems the drag feature could be improved. But
//       overall it looks incredible. You've nailed the design and the
//       responsiveness at various breakpoints works really well.
//     </p>
//   </div>
// </div>
//   `;
// }

// getData();

// Score button functions

const addScore = () => {
  scoreNumberConverted++;
  scoreNumber.innerText = scoreNumberConverted;
}

const subtractScore = () => {
  scoreNumberConverted--;
  scoreNumber.innerText = scoreNumberConverted;
}

const generateReply = () => {

const newComment = document.createElement('div');
newComment.classList.add('comment-reply');
newComment.innerHTML = `
<div class="comment-reply">
<div class="comment-card comment-child">
  <div class="comment-card-header">
    <img class="avatar" src="images/avatars/image-amyrobson.png" />
    <span class="name">amyrobson</span>
    <span class="time-created">1 month ago</span>
  </div>
  <p class="comment-content">
    Impressive! Though it seems the drag feature could be improved. But
    overall it looks incredible. You've nailed the design and the
    responsiveness at various breakpoints works really well.
  </p>
  <div class="card-bottom">
    <div class="score">
      <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
          fill="#C5C6EF"
          id="minus"
          class="score-button"
        />
      </svg>
      <span class="number">12</span>
      <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
          fill="#C5C6EF"
          id="plus"
          class="score-button"
        />
      </svg>
    </div>
  </div>
</div>
</div>

`
container.appendChild(newComment);
}

replyButton.addEventListener('click', generateReply);

