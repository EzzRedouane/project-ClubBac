/*
import {boardMember} from '/data/member.js';

let profileHTML = '';


boardMember.forEach((profile) => {
  
  profileHTML += `
    <div class="profile_subcontainer">
        <div class="profile_info">
          <div class="profile_img">
            <img src="${profile.image}" alt="">
          </div>
          <div class="profile_name">
            <h3>${profile.name}</h3>
          </div>
        </div>
        <hr>
        <div class="profile_subinfo">
          <div class="profile_title">
            <p><strong>Sector:</strong></p>
            <p><strong>Address:</strong></p>
          </div>
          <div class="profile_subtitle">
            <p>${profile.section}</p>
            <p>${profile.address}</p>
          </div>
        </div>
        <hr>
        <div class="profile_about">
          <h4>About</h4>
          <p>${profile.about}</p>
        </div>
        <hr>
        <div class="profile_icon">
          <a href="${profile.instagram}" target="_blank"><i class="bx bxl-instagram"></i></a>
          <a href="${profile.linkedin}" target="_blank"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
  `;
});

const container = document.querySelector('.js-profile-container');
if (container) {
  container.innerHTML = profileHTML;
}
else{
  console.error("Error");
}

document.querySelector('.js-profile-container').innerHTML = profileHTML;
*/