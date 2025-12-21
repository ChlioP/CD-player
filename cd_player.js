
// Define the playlist. Each entry includes a title, the audio file name and the lyrics.
const songs = [
    {
    title: 'Anh Đã Quen Với Cô Đơn',
    audio: 'sobin.mp3',
    image: '1.jpg',
    lyrics: [
        "Có thể anh mơ",
        "Chỉ là giấc mơ về một hạnh phúc",
        "Nắng phai trên mi ai",
        "Giờ em nơi đâu có biết chăng nơi này",
        "Có lẽ em đã quên rồi",
        "Từng chiếc ôm trong tiết sang trời trở đông",
        "Những ngón tay ta đan chặt",
        "Nhìn nhau thật lâu và chẳng cần nói điều gì",
        "Everynight alone",
        "Đừng để giọt nước mắt vẫn rơi tàn hoa khắp nơi thiếu em babe",
        "Everynight alone",
        "Lại gọi tên những nỗi nhớ đong đầy",
        "Bao đam mê cũng đã chóng phai",
        "Yêu em không biết đúng sai",
        "Chỉ bằng cảm xúc, bằng lý trí, bằng tất cả những gì anh có",
        "Hay em cho",
        "Khi hai con tim lệch nhịp",
        "Anh có cố gắng thế nào",
        "Em cũng không hiểu được em như là bản thân chính em",
        "Có thể anh mơ",
        "Chỉ là giấc mơ về một hạnh phúc",
        "Nắng phai trên mi ai",
        "Giờ em nơi đâu có biết chăng nơi này",
        "Có lẽ em đã quên rồi",
        "Từng chiếc ôm trong tiết sang trời trở đông",
        "Những ngón tay ta đan chặt",
        "Nhìn nhau thật lâu và chẳng cần nói điều gì",
        "Everynight alone",
        "Đừng để giọt nước mắt vẫn rơi tàn hoa khắp nơi thiếu em babe",
        "Everynight alone",
        "Lại gọi tên những nỗi nhớ đong đầy",
        "Everynight alone",
        "Đừng để giọt nước mắt vẫn rơi tàn khắp nơi thiếu em babe",
        "Everynight alone",
        "Lại gọi tên những nỗi nhớ đong đầy"
    ]
    },
    {
    title: 'Người Đầu Tiên',
    audio: 'nguoi_dau_tien.mp3',
    image: '2.jpg',
    lyrics: [
        'Là người đầu tiên cầm tay',
        "Là người đầu tiên ôm em dưới bầu trời này",
        "Là người đầu tiên chạm môi",
        "Là người đầu tiên em dâng cả cuộc đời",
        "Chỉ có anh làm trái tim em biết đập nồng nàn",
        "Nỗi đau hoá tiếng cười rộn ràng",
        "Mọi lo toan cứ để anh mang",
        "Hay là em đi theo anh đến nơi",
        "Nơi mà ta không chia đôi quãng đời",
        "Nơi mà có anh cười như năm tháng đôi mươi",
        "Nơi mà bão giông đều tan vì có nhau rồi",
        "Hay để em đi theo anh cho rồi",
        "Ly biệt tội lắm em đau hết đời",
        "Vắng người đời em chỉ còn bóng tối vây quanh",
        "Làm ơn đừng bỏ em giữa cuộc đời hiu quạnh",
        "Chẳng còn người luôn cạnh bên",
        "Chẳng còn người trao em tay ấm môi mềm",
        "Chẳng còn người luôn gọi tên",
        "Chẳng còn người bên em yên giấc êm đềm",
        "Chỉ có anh làm trái tim em biết đập nồng nàn",
        "Nỗi đau hoá tiếng cười rộn ràng (Niềm đau tan biến)",
        "Mọi lo toan cứ để anh mang",
        "Hay là em đi theo anh đến nơi",
        "Nơi mà ta không chia đôi quãng đời",
        "Nơi mà có anh cười như năm tháng đôi mươi",
        "Nơi mà bão giông đều tan vì có nhau rồi",
        "Hay để em đi theo anh cho rồi",
        "Ly biệt tội lắm em đau hết đời",
        "Vắng người đời em chỉ còn bóng tối vây quanh",
        "Làm ơn đừng bỏ em giữa cuộc đời hiu quạnh",
        "Em đâu cần gì ngoài người em yêu",
        "Ấm áp nơi anh làm sao có thể thiếu",
        "Nước mắt giờ này chẳng còn bao nhiêu",
        "Thời gian của hai ta giờ hoá tro tàn",
        "Hà ha ha há ha, hà ha ha há ha",
        "Hà ha ha há, ha ha ha ha",
        "Hà ha ha há ha, hà ha ha há ha",
        "Hà ha ha há, ha ha ha ha ha",
        "Cớ sao ông trời lấy đi cả thế giới",
        "Là người đầu tiên cầm tay",
        "Là người đầu tiên ôm em dưới bầu trời này",
        "Là người đầu tiên chạm môi",
        "Là người đầu tiên em dâng cả cuộc đời"
    ]
    },
    {
    title: 'Người Ta',
    audio: 'nguoi_ta.mp3',
    image: '3.jpg',
    lyrics: [
        "Thì ra sau bao nhiêu năm tháng",
        "Ta bên nhau trái tim anh",
        "Vẫn còn phân vân",
        "Thì ra em cũng chỉ là một sự lựa chọn",
        "Trong muôn ngàn lựa chọn đối với anh",
        "Thì ra bao lâu em cố chấp",
        "Gìn giữ hạnh phúc",
        "Chỉ nhận lại đầy những vết thương",
        "Thì ra chưa một lần nào",
        "Anh thực sự cần em",
        "Mà chỉ là lừa dối em",
        "Người ta mang cho anh say đắm",
        "Để anh thấy mình yêu như lần dầu tiên",
        "Người ta cho anh tìm lại nụ cười",
        "Mà từ lâu anh không còn",
        "Được bình yên bên em",
        "Còn em em hy sinh nhiều thế",
        "Em đợi chờ nhiều thế",
        "Em chịu đựng nhiều đến thế mà",
        "Còn em cũng một thời thật thà",
        "Em cũng như người ta",
        "Dành trọn tình yêu với anh thế mà",
        "Em cũng thật thà cũng như người ta",
        "Dành trọn tình yêu với anh thế mà"
    ]
    },
    {
    title: 'Chúng Ta Không Thuộc Về Nhau',
    audio: 'ctktvn.mp3',
    image: '4.jpg',
    lyrics: [
        "Niềm tin đã mất, giọt nước mắt cuốn kí ức anh chìm sâu",
        "Tình về nơi đâu? Cô đơn đôi chân lạc trôi giữa bầu trời",
        "Màn đêm che dấu, từng góc tối khuất lấp phía sau bờ môi",
        "Tại vì anh thôi, yêu say mê nên đôi khi quá dại khờ",
        "Nhắm mắt ơ thờ, anh không muốn lạc vào trong nỗi đau này",
        "Phía trước bây giờ ai đang nắm chặt bàn tay của em vậy? (Em vậy)",
        "Mông lung như một trò đùa (trò đùa), anh xin giơ tay rút lui thôi (do ai?)",
        "Trách ai bây giờ đây? Ooh-ooh-ooh-ooh-ooh"
    ]
    },
    {
    title: 'Tiếng Pháo Giao Thừa',
    audio: 'tet.mp3',
    image: '5.jpg',
    },
    {
    title: 'Cung Thiên Bình',
    audio: '10.mp3',
    image: '6.jpg',
    },
    {
    title: 'Cung Thiên Bình',
    audio: '2.mp3',
    image: '7.jpg',
    },
    {
    title: 'YouTube: Chill Step Mix',
    youtubeId: 'b_0f9PDsuvQ',
    image: 'https://img.youtube.com/vi/b_0f9PDsuvQ/hqdefault.jpg',
    lyrics: [
        'Added from your provided link.',
        'Click to play; your browser might require an initial interaction.'
    ]
    }
];

// Grab references to elements once to avoid repeated lookups
const player = document.getElementById('audio-player');
const cd = document.getElementById('cd');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const replayBtn = document.getElementById('replay-btn');
const lyricsContainer = document.getElementById('lyrics');
const songTitle = document.getElementById('song-title');
const songList = document.getElementById('song-list');
const searchInput = document.getElementById('search-input');
const youtubeTitleInput = document.getElementById('youtube-title');
const youtubeUrlInput = document.getElementById('youtube-url');
const addYoutubeBtn = document.getElementById('add-youtube');

let currentSongIndex = -1;
const playIcon = '<img width="24" height="24" src="https://img.icons8.com/parakeet-line/48/play.png" alt="play"/>';
const pauseIcon = '<img width="24" height="24" src="https://img.icons8.com/ios/50/pause--v1.png" alt="pause"/>';
let ytPlayer = null;
let ytReady = false;
let pendingYouTubeId = null;
let pendingYouTubeAutoplay = false;

// Populate the list of songs based on the search filter
function loadSongsList(filter = '') {
    songList.innerHTML = '';
    const filtered = songs.filter(s => s.title.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(song => {
    const div = document.createElement('div');
    div.className = 'song-item';
    const titleSpan = document.createElement('div');
    titleSpan.className = 'song-title';
    titleSpan.textContent = song.youtubeId ? `${song.title} • YouTube` : song.title;
    div.appendChild(titleSpan);

    if (song.youtubeId) {
        const del = document.createElement('button');
        del.className = 'delete-youtube';
        del.textContent = 'Delete';
        del.onclick = e => {
        e.stopPropagation();
        deleteSong(song);
        };
        div.appendChild(del);
    }

    div.onclick = () => {
        currentSongIndex = songs.indexOf(song);
        loadSong(currentSongIndex);
        playSong();
    };
    songList.appendChild(div);
    });
}

// Load a specific song, setting its title, source and lyrics
function loadSong(index) {
    const song = songs[index];
    if (!song) return;
    songTitle.textContent = song.title;
    const art = song.image || (song.youtubeId ? `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg` : '');
    updateBackground(art);

    if (song.youtubeId) {
    // Prepare the YouTube player
    ensureYouTubePlayer();
    player.pause();
    pendingYouTubeAutoplay = false;
    if (ytPlayer && ytReady) {
        ytPlayer.loadVideoById(song.youtubeId);
    } else {
        pendingYouTubeId = song.youtubeId;
    }
    } else {
    // Local file
    if (ytPlayer && ytReady) {
        ytPlayer.stopVideo();
    }
    player.src = song.audio;
    }

    // Build the lyrics lines
    lyricsContainer.innerHTML = '';
    if (!song.lyrics || song.lyrics.length === 0) {
    const line = document.createElement('div');
    line.className = 'lyric-line active-line';
    line.textContent = 'Lyrics not available for this song';
    lyricsContainer.appendChild(line);
    return;
    }
    song.lyrics.forEach(text => {
    const div = document.createElement('div');
    div.className = 'lyric-line';
    div.textContent = text;
    lyricsContainer.appendChild(div);
    });
}

// Update background images based on the current song
function updateBackground(imagePath) {
    const imageUrl = `url('${imagePath}')`;
    const playerContainer = document.getElementById('player-container');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
    // Keep the mobile view clean: rely on the CSS gradients and avoid busy art behind text
    document.body.style.backgroundImage = '';
    playerContainer.style.backgroundImage = '';
    } else {
    // Laptop/desktop: bring back the album art for body and box
    document.body.style.backgroundImage = imageUrl;
    document.body.style.backgroundSize = 'contain'; // show full image
    document.body.style.backgroundRepeat = 'repeat-x'; // place a second copy alongside
    document.body.style.backgroundPosition = 'center center';
    playerContainer.style.backgroundImage = `linear-gradient(135deg, rgba(18, 13, 36, 0.55), rgba(21, 15, 44, 0.6)), ${imageUrl}`;
    playerContainer.style.backgroundSize = 'cover';
    playerContainer.style.backgroundPosition = 'center';
    }

    // Also show the art on the disc itself
    cd.style.backgroundImage = imageUrl;
    cd.style.backgroundSize = 'cover';
    cd.style.backgroundPosition = 'center';
}

// Load the YouTube iframe API if needed and spin up a hidden player
function ensureYouTubePlayer() {
    if (ytPlayer || ytReady) return;
    if (!document.getElementById('youtube-iframe-script')) {
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-script';
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    }
}

// YouTube API callback (must be on window)
window.onYouTubeIframeAPIReady = () => {
    ytPlayer = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    playerVars: { controls: 0, modestbranding: 1, rel: 0, playsinline: 1 },
    events: {
        onReady: () => {
        ytReady = true;
        ytPlayer.unMute();
        ytPlayer.setVolume(100);
        if (pendingYouTubeId) {
            ytPlayer.loadVideoById(pendingYouTubeId);
            if (pendingYouTubeAutoplay) {
            ytPlayer.playVideo();
            setPlayingUI(true);
            }
            pendingYouTubeId = null;
            pendingYouTubeAutoplay = false;
        }
        },
        onStateChange: handleYouTubeStateChange
    }
    });
};

function handleYouTubeStateChange(event) {
    if (!event || !event.data || !window.YT) return;
    if (event.data === YT.PlayerState.PLAYING) {
    setPlayingUI(true);
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.CUED) {
    setPlayingUI(false);
    } else if (event.data === YT.PlayerState.ENDED) {
    advanceSong();
    }
}

function setPlayingUI(isPlaying) {
    if (isPlaying) {
    cd.classList.add('spinning');
    playBtn.innerHTML = pauseIcon;
    } else {
    cd.classList.remove('spinning');
    playBtn.innerHTML = playIcon;
    }
}

function isYouTubePlaying() {
    if (!ytPlayer || !ytReady || typeof window.YT === 'undefined' || !YT.PlayerState) return false;
    return ytPlayer.getPlayerState && ytPlayer.getPlayerState() === YT.PlayerState.PLAYING;
}

function advanceSong() {
    if (songs.length === 0) return;
    currentSongIndex = currentSongIndex < 0 ? 0 : (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

// Start playback and spin the disc
function playSong() {
    if (currentSongIndex < 0) return;
    const song = songs[currentSongIndex];
    if (song.youtubeId) {
    if (ytPlayer && ytReady) {
        ytPlayer.loadVideoById(song.youtubeId);
        ytPlayer.playVideo();
        setPlayingUI(true);
    } else {
        pendingYouTubeId = song.youtubeId;
        pendingYouTubeAutoplay = true;
        ensureYouTubePlayer();
    }
    } else {
    player.play();
    setPlayingUI(true);
    }
}

// Pause playback and stop the disc
function pauseSong() {
    const song = songs[currentSongIndex];
    if (song && song.youtubeId && ytPlayer && ytReady) {
    ytPlayer.pauseVideo();
    } else {
    player.pause();
    }
    setPlayingUI(false);
}

// Set up button interactions
playBtn.addEventListener('click', () => {
    if (currentSongIndex < 0 && songs.length > 0) {
    currentSongIndex = 0;
    loadSong(0);
    }
    const song = songs[currentSongIndex];
    const shouldPlay = song && song.youtubeId ? !isYouTubePlaying() : player.paused;
    if (shouldPlay) playSong();
    else pauseSong();
});

nextBtn.addEventListener('click', () => {
    if (songs.length === 0) return;
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

prevBtn.addEventListener('click', () => {
    if (songs.length === 0) return;
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

replayBtn.addEventListener('click', () => {
    if (currentSongIndex < 0) return;
    const song = songs[currentSongIndex];
    if (song.youtubeId && ytPlayer && ytReady) {
    ytPlayer.seekTo(0);
    playSong();
    } else {
    player.currentTime = 0;
    playSong();
    }
});

// When the song ends, stop the spin and reset the play button icon
player.addEventListener('ended', () => {
    advanceSong();
});

player.addEventListener('play', () => setPlayingUI(true));
player.addEventListener('pause', () => setPlayingUI(false));

// Handle search input
searchInput.addEventListener('input', e => {
    loadSongsList(e.target.value);
});

// Allow users to add YouTube links to the list
addYoutubeBtn.addEventListener('click', () => {
    const url = youtubeUrlInput.value.trim();
    const title = youtubeTitleInput.value.trim();
    const id = parseYouTubeId(url);
    if (!id) {
    alert('Please paste a valid YouTube link.');
    return;
    }
    const songTitleText = title || 'YouTube track';
    songs.push({
    title: songTitleText,
    youtubeId: id,
    image: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    lyrics: ['User added track from YouTube.']
    });
    youtubeUrlInput.value = '';
    youtubeTitleInput.value = '';
    currentSongIndex = songs.length - 1;
    loadSongsList(searchInput.value);
    loadSong(currentSongIndex);
    playSong();
});

function parseYouTubeId(url) {
    // Robustly extract ID from common formats: watch?v=, short youtu.be, embed/, shorts/, with extra params
    try {
    const parsed = new URL(url);
    if (parsed.searchParams.get('v')) return parsed.searchParams.get('v');
    const parts = parsed.pathname.split('/');
    const candidate = parts.pop() || parts.pop(); // handle trailing slash
    if (candidate && candidate.length === 11) return candidate;
    } catch (e) {
    // not a full URL, fall back to regex
    }
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Remove a song (YouTube only) from the list
function deleteSong(song) {
    const index = songs.indexOf(song);
    if (index === -1) return;
    // If deleting the currently playing song, stop playback and reset UI
    if (index === currentSongIndex) {
    pauseSong();
    player.src = '';
    if (ytPlayer && ytReady) {
        ytPlayer.stopVideo();
    }
    songTitle.textContent = 'Select a song';
    lyricsContainer.innerHTML = '';
    cd.style.backgroundImage = '';
    currentSongIndex = -1;
    } else if (index < currentSongIndex) {
    currentSongIndex -= 1; // shift back since array shrinks
    }
    songs.splice(index, 1);
    loadSongsList(searchInput.value);
}

// Populate the list the first time
loadSongsList();
