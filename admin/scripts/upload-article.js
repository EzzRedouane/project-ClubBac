function saveArticle() {
  // Get the values from the form
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const imageInput = document.getElementById("imageInput");

  let imageDataUrl = "";
  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageDataUrl = e.target.result;

      // Get existing articles from localStorage or initialize as empty array
      const existingArticles = JSON.parse(localStorage.getItem("articles")) || [];

      // Add the new article to the array
      const article = { title, description, imageDataUrl };
      existingArticles.push(article);

      // Save the updated articles to localStorage
      localStorage.setItem("articles", JSON.stringify(existingArticles));

      // Redirect to display page
      window.location.href = "article.html";
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    const article = { title, description, imageDataUrl: "" };

    const existingArticles = JSON.parse(localStorage.getItem("articles")) || [];
    existingArticles.push(article);

    localStorage.setItem("articles", JSON.stringify(existingArticles));

    // Redirect to display page
    window.location.href = "article.html";
  }
}

function resetForm() {
  // Reset the form fields
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imageInput").value = "";
  document.getElementById("imagePreview").innerHTML = "";
}