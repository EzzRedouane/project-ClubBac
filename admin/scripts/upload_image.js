function displayImages() {
  const imageInput = document.getElementById("imageInput");
  const imagePreview = document.getElementById("imagePreview");

  // Clear previous previews
  imagePreview.innerHTML += "";

  if (imageInput.files && imageInput.files.length > 0) {
      // Loop through each file selected
      Array.from(imageInput.files).forEach(file => {
          const reader = new FileReader();

          reader.onload = function (e) {
              // Create an image element for each file
              const imgElement = document.createElement("img");
              imgElement.src = e.target.result;
              imgElement.alt = file.name;
              imgElement.style.Width = "250px";
              imgElement.style.height = "200px";
              imgElement.style.borderRadius = "5px";
              imgElement.style.margin = "10px";

              // Append the image to the preview container
              imagePreview.appendChild(imgElement);
          };

          reader.readAsDataURL(file); // Read each file as Data URL
      });
  } else {
      // If no files selected, show a message
      imagePreview.innerHTML = "<p>No images uploaded</p>";
  }
}
