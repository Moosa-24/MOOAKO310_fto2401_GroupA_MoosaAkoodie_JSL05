// Array of song objects. Add at least 5 songs with title, artist, and genre properties.

const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Grenade", artist: "Bruno Mars", genre: "Pop" },
    { title: "Fallin'", artist: "Alicia Keys", genre: "R&B" },
    { title: "miss independent", artist: "Ne-Yo", genre: "R&B" },
    { title: "What a Wonderful World", artist: "Louis Armstrong", genre: "Jazz" },
    { title: "Fly Me to the Moon", artist: "Frank Sinatra", genre: "Jazz" },
    { title: "Lean On", artist: "DJ Snake", genre: "EDM" },
    { title: "Alone", artist: "Marshmello", genre: "EDM" }
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Groot": "Jazz",
    "Drax": "R&B",
    "Rocket": "EDM"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = new Map();

    const starLordPlaylist = songs.filter(song => song.genre === "Rock");
    const gamoraPlaylist = songs.filter(song => song.genre === "Pop");
    const grootPlaylist = songs.filter(song => song.genre === "Jazz");
    const draxPlaylist = songs.filter(song => song.genre === "R&B");
    const rocketPlaylist = songs.filter(song => song.genre === "EDM");

    playlists.set("Star-Lord's Playlist", starLordPlaylist);
    playlists.set("Gamora's Playlist", gamoraPlaylist);
    playlists.set("Groot's Playlist", grootPlaylist);
    playlists.set("Drax's Playlist", draxPlaylist);
    playlists.set("Rocket's Playlist", rocketPlaylist);

    // Updating playlists based on guardians' preferences
    for (const [guardian, genre] of Object.entries(guardians)) {
        const playlist = songs.filter(song => song.genre === genre);
        playlists.set(`${guardian}'s Playlist`, playlist);
    }
     /*Object.entries() method. This method converts the guardians object into an array of key-value pairs,
     where each pair consists of a Guardian's name and their preferred genre.*/
    return playlists;
}

// Call generatePlaylist and display the playlists for each Guardian
const allPlaylists = generatePlaylist(guardians, songs);
const playlistsElement = document.getElementById('playlists');

//I'd much rather code this stuff in the html file because it is so much more CONFUSING work to do from the javaScript end -_-
//if u ask me to explain what's happening, i can, but to code this with no help specifically in javascript, i'd have issues(time constraints)
//instead of saying 2 + 2 is 4 in html document, its like saying 2 + 2 + 2 - 4 + 1 + 2 - 1 = 4 in the javascript side, like why?

for (const [guardianName, guardianPlaylist] of allPlaylists) {
    const playlistDiv = document.createElement('div');
    playlistDiv.classList.add('playlist');
    
    const heading = document.createElement('h2');
    heading.textContent = guardianName;
    playlistDiv.appendChild(heading);
    
    guardianPlaylist.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song');
        songItem.innerHTML = `<span class="song-title">${song.title}</span> - ${song.artist}`;
        playlistDiv.appendChild(songItem);
    });

    playlistsElement.appendChild(playlistDiv);
}

