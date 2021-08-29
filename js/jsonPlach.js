const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(Response => Response.json())
        .then(data => displayComments(data))
}
loadComments()

const displayComments = (comments) => {
    const commentsSection = document.getElementById('comments');
    comments.forEach(comment => {
        // console.log(comment)
        const div = document.createElement('div');
        div.classList.add('cards')
        div.classList.add('card');
        div.innerHTML = `
        <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">${comment.email}</h5>
                <p class="card-text">${comment.body}</a><br>
                <button onclick="dataDetails('${comment.email}')" class="btn btn-primary mt-3">Go somewhere</button>
            </div>
        `
        commentsSection.appendChild(div)

    });
}

function dataDetails(comment) {
    // console.log(comment)
    const emailList = document.getElementById('email');
    const li = document.createElement('li');
    li.innerHTML = `Email: ${comment}`
    emailList.appendChild(li)
}