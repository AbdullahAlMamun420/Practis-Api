
document.getElementById('getUsers').addEventListener('click', () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(data => displayUsers(data.results));
})

const displayUsers = (users) => {
    console.log(users)
    const usersDiv = document.getElementById('singleUser');
    for (const user of users) {
        console.log(user.name.first)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
         <div class="card h-100">
                    <img width:100% src="${user.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                     <h3 class="card-title">${user.name.first} ${user.name.last}</h3>
                     <h6 class="card-title"><span class='text-primary'> Country:</span> ${user.location.country}</h6>
                     <h6 class="card-title"><span class='text-primary'> City:</span> ${user.location.city}</h6>
                     <h6 class="card-title"><span class='text-primary'> State:</span> ${user.location.state}</h6>
                     <h6 class="card-title"><span class='text-primary'> postCode:</span> ${user.location.postcode}</h6>
                     <button class='btn btn-danger mt-2'> See Details</button>
            </div>
            </div>
        `
        usersDiv.appendChild(div)
    }
}