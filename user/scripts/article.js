import {articleData} from '/data/articleData.js';

let articleHTML = '';

articleData.forEach((article) => {
  articleHTML += `
    <div class="article_subcontainer_section">
      <div class="article_subcontainer">
        <div class="article_img">
          <img src="${article.image}" alt="">
        </div>
        <div class="article_title">
          <h4>${article.title}</h4>
          <p>${article.date}</p>
          <p>${article.text}</p>
        </div>
      </div>
    </div>
  `
});
document.querySelector('.js-article-container').innerHTML = articleHTML;