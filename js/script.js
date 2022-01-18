const avatar = document.querySelector('.avatar'),
      name = document.querySelector('.name'),
      timeCreated = document.querySelector('.timer-created'),
      commentContent = document.querySelector('.comment-content'),
      scoreNumber = document.querySelector('.number'),
      plusButton = document.getElementById('plus-button'),
      minusButton = document.getElementById('minus-button'),
      replyButton = document.querySelector('.reply-btn'),
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

const addScore = () => {

  scoreNumberConverted ++;
  console.log(scoreNumberConverted);

}

