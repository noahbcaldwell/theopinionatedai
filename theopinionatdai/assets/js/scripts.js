fetch('./posts.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

console.log(response.posts[0].title)