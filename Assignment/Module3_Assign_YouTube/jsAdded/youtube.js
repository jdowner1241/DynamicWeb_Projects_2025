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
    const row = document.createElement('div');
    row.className = 'row'; // Bootstrap row class

    videos.forEach(video => {
        const videoId = video.id?.videoId || 'Unavailable';
        const videoTitle = video.snippet?.title || 'No Title';
        const videoThumbnail = video.snippet?.thumbnails?.medium?.url || '';
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4'; // Bootstrap column class for 3 columns per row and margin-bottom for spacing

        col.innerHTML = `
            <div class="card h-100 d-flex flex-column" style="max-height: 350px; overflow: hidden;">
            <img class="card-img-top" src="${videoThumbnail}" alt="${videoTitle}" style="height: 180px; object-fit: cover;">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-truncate" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 3em;">${videoTitle}</h5>
                <div class="mt-auto">
                <button class="btn btn-primary play-video-btn mb-2" data-video-id="${videoId}">Play Video</button>
                </div>
            </div>
            </div>
        `;
        row.appendChild(col);
    });

    // Add margin between rows
    row.style.marginBottom = '20px';

    videoContainer.appendChild(row);

    // Add event listeners to play video buttons
    const playButtons = document.querySelectorAll('.play-video-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const videoId = event.target.getAttribute('data-video-id');
            if (videoId && videoId !== 'Unavailable') {
                playVideo(videoId);
            } else {
                alert('Video unavailable.');
            }
        });
    });
}

// Method to play the video directly in the window
function playVideo(videoId) {
    const videoTitle = document.querySelector(`[data-video-id="${videoId}"]`).closest('.card').querySelector('.card-title').textContent;
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
        <h3 class="mb-3 text-center" style="font-size: 3rem; font-weight: bold; color: #333; margin-top: 10px; margin-bottom: 20px;">${videoTitle}</h3>
        <div class="embed-responsive embed-responsive-16by9" style="margin-top: 5px; margin-bottom: 20px;">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        </div>
        <button class="btn btn-secondary play-video-btn mt-3 mb-3" id="back-button" style="margin-bottom: 20px;">Back to Videos</button>
    `;

    // Add event listener to back button
    document.getElementById('back-button').addEventListener('click', () => {
        fetchVideos(); // Reload the videos
    });
}

// Add event listener for search functionality
document.getElementById('search-term').addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim();
    fetchVideos(searchTerm);
});

// Initial fetch for channel videos
fetchVideos();
