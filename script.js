const music = document.querySelector('audio');
const prevBtn = document.getElementById('pref');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

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