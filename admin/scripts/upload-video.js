function displayVideo(){
  const videoInput = document.getElementById('video-input');
  const videoDisplay = document.getElementById('video-display');

  videoDisplay.innerHTML = '';

  if (videoInput.files && videoInput.files.length > 0) {
    // Loop through each file selected
    Array.from(videoInput.files).forEach(file => {
        const reader = new FileReader();

        reader.onload = function (e) {
            // Create an image element for each file
            const videoElement = document.createElement("video");
            videoElement.src = e.target.result;
            videoElement.alt = file.name;
            videoElement.style.width = "300px";
            videoElement.style.height = "220px";
            videoElement.style.borderRadius = "5px";
            videoElement.style.margin = "10px";
            videoElement.controls = true; // Adds video controls for playback

            // Append the image to the preview container
            videoDisplay.appendChild(videoElement);
        };

        reader.readAsDataURL(file); // Read each file as Data URL
    });
  } 
  else {
    // If no files selected, show a message
    videoDisplay.innerHTML = "<p>No videos uploaded</p>";
  }
}