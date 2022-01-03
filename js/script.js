const avatar = document.querySelector('.avatar'),
      name = document.querySelector('.name'),
      timeCreated = document.querySelector('.timer-created'),
      commentContent = document.querySelector('.comment-content'),
      scoreNumber = document.querySelector('.number'),
      replyButton = document.querySelector('.reply-btn'),
      container = document.querySelector('.container');

const getData = async () => {
  const res = await fetch('./data.json');

  const data = await res.json();
  console.log(data);
}



const generateComment = () => {
  getData();

  container.innerHTML =  
  `
  <div class="comment-card">
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
            <object
              data="images/icon-minus.svg"
              type="image/svg+xml"
              class="score-button"
            ></object>
            <span class="number">12</span>
            <object
              data="images/icon-plus.svg"
              type="image/svg+xml"
              class="score-button"
            ></object>
          </div>
          <div class="reply">
            <object
              data="images/icon-reply.svg"
              type="image/svg+xml"
              class="reply-btn"
            ></object>
            <span class="reply-text">Reply</span>
          </div>
        </div>
      </div>
  
  
  `;
}

generateComment();


