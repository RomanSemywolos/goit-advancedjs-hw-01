import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function setCurrentTime(timing) {
    localStorage.setItem('videoplayer-current-time', timing);
}

const throttledSetCurrentTime = throttle(setCurrentTime, 1000, {
    trailing: true,
});

player.on('timeupdate', function (data) {
    throttledSetCurrentTime(data.seconds);
});

const currentVideoTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(currentVideoTime);