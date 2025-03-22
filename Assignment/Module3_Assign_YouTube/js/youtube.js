const apiKey = 'AIzaSyBSR7zlJ_eBZTVbvLhnVJa-MPBoBssgqrs';
const apiKey1 = 'AIzaSyBwE3D9klB4j472uy_7F5h65VUEmtdOeys';
const channelId = 'UCNDewO7gdjEwQZAeY8coW8g';
const maxResults = 5;

// Method to use the fetch API to get videos from YouTube
async function fetchVideos(searchTerm = '') {
    const channelQuery = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;
    const searchQuery = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&q=${encodeURIComponent(searchTerm)}&maxResults=${maxResults}`;
    const url = searchTerm ? searchQuery : channelQuery;

    const response = await fetch(url);
    const data = await response.json();
    displayVideos(data.items);
}

// Method to display the videos on the page
function displayVideos(videos) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear previous results
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

// Add event listener for search functionality
document.getElementById('search-term').addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim();
    fetchVideos(searchTerm);
});

// Initial fetch for channel videos
fetchVideos();
