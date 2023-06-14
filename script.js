const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('pref');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: 'Skillet',
        displayName: 'Whispers In The Dark',
        artist: 'Skillet',
    },
    {
        name: '30sToMars',
        displayName: 'The Kill',
        artist: 'Thirty Seconds To Mars',
    },
    {
        name: 'MGK',
        displayName: 'Baddest',
        artist: 'Machine Gun Kelly',
    },
    {
        name: 'ThreeDaysGrace',
        displayName: 'I Hate Everything About You',
        artist: 'Three Days Grace',
    },
    {
        name: 'FallingInReverse',
        displayName: 'Watch The World Burn',
        artist: 'Falling In Reverse',
    },
];

let isPlaying = false;

function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'Pause');
    playBtn.style.paddingLeft = '5.5px'
    music.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'Play');
    playBtn.style.paddingLeft = '0'
    music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`
    image.src = `img/${song.name}.jpg`
}

let songIndex = 0;

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

loadSong(songs[songIndex]);

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);