const apiKey = 'AIzaSyBSR7zlJ_eBZTVbvLhnVJa-MPBoBssgqrs';
const channelId = 'UCNDewO7gdjEwQZAeY8coW8g';
const maxResults = 5;

// Method to use the fetch API to get videos from YouTube
async function fetchVideos() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`);
    const data = await response.json();
    displayVideos(data.items);
}

// Method to display the videos on the page
function displayVideos(videos) {
    const videoContainer = document.getElementById('video-container');
    videos.forEach(video => {
        const videoId = video.id?.videoId || 'Unavailable';
        const videoTitle = video.snippet?.title || 'No Title';
        let videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <h3>${videoTitle}</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        `;
        videoContainer.appendChild(videoElement);
    });
}

fetchVideos();