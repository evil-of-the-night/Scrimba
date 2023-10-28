const posts = [
	{
		name: 'Vincent van Gogh',
		username: 'vincey1853',
		location: 'Zundert, Netherlands',
		avatar: 'images/avatar-vangogh.jpg',
		post: 'images/post-vangogh.jpg',
		comment: 'just took a few mushrooms lol',
		likes: 21,
	},
	{
		name: 'Gustave Courbet',
		username: 'gus1819',
		location: 'Ornans, France',
		avatar: 'images/avatar-courbet.jpg',
		post: 'images/post-courbet.jpg',
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: 'Joseph Ducreux',
		username: 'jd1735',
		location: 'Paris, France',
		avatar: 'images/avatar-ducreux.jpg',
		post: 'images/post-ducreux.jpg',
		comment:
			'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
		likes: 152,
	},
];

const postsEl = document.getElementById('posts');

const renderPosts = (posts, postsEl) => {
	postsEl.innerHTML = '';
	posts.forEach((post, index) => {
		postsEl.innerHTML += `
            <div class="post">
                <div class="post-header">
                    <img
                        src="${post.avatar}"
                        alt="Vincent van Gogh"
                        class="post-icon" />
                    <div>
                        <p class="post-author">${post.name}</p>
                        <p class="post-author-place">${post.location}</p>
                    </div>
                </div>
                <img
                    src="${post.post}"
                    class="post-img"
                    alt="post-vangogh"
                    ondblclick = "increaseLikes(${index})"/>
                <div class="post-metadata">
                    <div class="post-actions">
                        <img src="images/icon-heart.png" alt="like" onclick = "increaseLikes(${index})"/>
                        <img src="images/icon-comment.png" alt="comment" />
                        <img src="images/icon-dm.png" alt="share" />
                    </div>
                    <p class="post-likes bold-text">${post.likes} likes</p>
                    <p class="post-comment">
                        <span class="bold-text">${post.username}</span> ${post.comment}
                    </p>
                </div>
            </div>`;
	});
};

const increaseLikes = (index) => {
	posts[index].likes += 1;
	console.log(index, 'hello');
	renderPosts(posts, postsEl);
};

renderPosts(posts, postsEl);
