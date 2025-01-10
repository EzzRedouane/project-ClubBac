import {boardMember} from '/data/member.js';
//import profile from '../scripts/profile.js';

let boardMemberHTML = '';

boardMember.forEach((member) => {
  boardMemberHTML += `
    <div class="board_section">
      <img src="${member.image}" alt="user">
      <h4><a href="profile.html">${member.name}</a></h4>
      <h6>${member.section}</h6>
    </div>
    `;
});
document.querySelector('.js-board-container').innerHTML = boardMemberHTML;





