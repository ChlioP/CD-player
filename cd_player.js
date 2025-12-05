
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

let currentSongIndex = -1;

// Populate the list of songs based on the search filter
function loadSongsList(filter = '') {
    songList.innerHTML = '';
    const filtered = songs.filter(s => s.title.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(song => {
    const div = document.createElement('div');
    div.className = 'song-item';
    div.textContent = song.title;
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
    player.src = song.audio;
    updateBackground(song.image);
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
    document.body.style.backgroundImage = imageUrl;
    const playerContainer = document.getElementById('player-container');
    playerContainer.style.backgroundImage = imageUrl;
    playerContainer.style.backgroundSize = 'cover';
    playerContainer.style.backgroundPosition = 'center';
    playerContainer.style.backgroundBlendMode = 'overlay';
    // Also show the art on the disc itself
    cd.style.backgroundImage = imageUrl;
    cd.style.backgroundSize = 'cover';
    cd.style.backgroundPosition = 'center';
}

// Start playback and spin the disc
function playSong() {
    if (currentSongIndex < 0) return;
    player.play();
    cd.classList.add('spinning');
    playBtn.textContent = '⏸';
}

// Pause playback and stop the disc
function pauseSong() {
    player.pause();
    cd.classList.remove('spinning');
    playBtn.textContent = '▶';
}

// Set up button interactions
playBtn.addEventListener('click', () => {
    if (player.paused) {
    // If nothing has been loaded yet, load the first song by default
    if (currentSongIndex < 0) {
        currentSongIndex = 0;
        loadSong(0);
    }
    playSong();
    } else {
    pauseSong();
    }
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
    player.currentTime = 0;
    playSong();
});

// When the song ends, stop the spin and reset the play button icon
player.addEventListener('ended', () => {
    cd.classList.remove('spinning');
    playBtn.textContent = '▶';
});

// Handle search input
searchInput.addEventListener('input', e => {
    loadSongsList(e.target.value);
});

// Populate the list the first time
loadSongsList();
