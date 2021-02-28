const games = document.getElementById('games')
const gamelist = [
    {
        name: 'Memorama',
        url: 'MemoryGame/index.html'
    },
    {
        name: 'Whack-A-Mole',
        url: 'MemoryGame/index.html'
    }
]

gamelist.forEach(game => {
    games.innerHTML = games.innerHTML + `
    <a href='${game.url}'>
        <li>${game.name}</li>
    </a>
    `
})