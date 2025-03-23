const apiKey = 'o6TCoCmMnDQIkHidcUSVxROGbRBmkzAN'; 
        const apiUrl = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const articlesContainer = document.getElementById('articles');

          
                data.results.forEach(article => {
                    const articleDiv = document.createElement('div');
                    articleDiv.className = 'article';

                    const title = document.createElement('h2');
                    title.textContent = article.title;

                    const abstract = document.createElement('p');
                    abstract.textContent = article.abstract;

                    const byline = document.createElement('p');
                    byline.textContent = article.byline;

                    const link = document.createElement('a');
                    link.href = article.url;
                    link.textContent = 'Read more';

                    // Check if multimedia exists
                    if (article.multimedia && article.multimedia.length > 0) {
                        const image = document.createElement('img');
                        image.src = article.multimedia[0].url;
                        image.alt = article.title;
                        articleDiv.appendChild(image);
                    }

                    articleDiv.appendChild(title);
                    articleDiv.appendChild(abstract);
                    articleDiv.appendChild(byline);
                    articleDiv.appendChild(link);

                    articlesContainer.appendChild(articleDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });