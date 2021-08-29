function loadPlayer() {
    const inputName = document.getElementById('input-feild');
    inputName.textContent = '';
    const playerName = inputName.value;
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Danny%20Welbeckhttps://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p=${playerName}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayPlayer(data.player[0]))
    inputName.value = '';
}


const displayPlayer = (player) => {
    console.log(player)
    const playerDiv = document.getElementById('single-player')
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
                 <div class="card h-100">
                             <img src="${player.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> Name: ${player.strPlayer}</h5>
                        <h5 class="card-title"> Team: ${player.strTeam2}</h5>
                        <p>${player.strDescriptionDE.slice(0, 200)}</p>
                    </div>
                    <div class="card-footer  text-center">
                        <small class="text-muted">খেলা হবে মামা</small>
                    </div>
                </div>
    `
    playerDiv.appendChild(div)

}