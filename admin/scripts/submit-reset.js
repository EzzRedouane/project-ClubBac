function submitHandler() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const videoInput = document.getElementById('video-input');

  if (title && description && videoInput.files.length > 0) {
    const file = videoInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const videoData = e.target.result;

      // Get existing videos from localStorage or initialize an empty array
      const videos = JSON.parse(localStorage.getItem('videos')) || [];

      // Add the new video
      videos.push({ title, description, videoData, date: new Date().toLocaleDateString(), likes: 0 });

      // Save back to localStorage
      localStorage.setItem('videos', JSON.stringify(videos));

      // Redirect to display page
      window.location.href = 'video.html';
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please fill in all fields and upload a video.');
  }
};

function resetHandler(){

}