const audioPlayer = document.getElementById('audioPlayer');
        const playPauseButton = document.getElementById('playPauseButton');
        const nextButton = document.getElementById('nextButton');
        const prevButton = document.getElementById('prevButton');
        const trackNameElement = document.getElementById('trackName');
        const trackImageElement = document.getElementById('trackImage');

        const audioFiles = [
           { name: 'Iravingu Theevai', src: 'music/m1.mp3', image: 'trackimages/i5.jpg'},
            { name: 'Nee kavithaigala', src: 'music/m2.mp3', image: 'trackimages/i1.jpg' },
            { name: 'Urugi Urugi', src: 'music/m3.mp3', image: 'trackimages/i2.jpg' },
            { name: 'vennilave Saral Nee', src: 'music/m4.mp3', image: 'trackimages/i3.jpg' },
            { name: 'En Jeevan', src: 'music/m5.mp3', image: 'trackimages/i4.jpg' },
            { name: 'The Life Of Ram', src: 'music/m6.mp3', image: 'trackimages/i6.jpg' },
            
        ];

        let currentTrack = 0;
        let isPlaying = false;

        function updateTrackName() {
            trackNameElement.textContent = audioFiles[currentTrack].name;
            trackImageElement.src = audioFiles[currentTrack].image;
        }

        function togglePlayPause() {
            if (isPlaying) {
                audioPlayer.pause();
                isPlaying = false;
                playPauseButton.textContent = '\u25BA';
            } else {
                audioPlayer.play();
                isPlaying = true;
                playPauseButton.textContent = '\u275A\u275A';
            }
        }
        playPauseButton.addEventListener('click', () => {
            togglePlayPause();
        });
        nextButton.addEventListener('click', () => {
            currentTrack = (currentTrack + 1) % audioFiles.length;
            audioPlayer.src = audioFiles[currentTrack].src;
            updateTrackName();
            if (isPlaying) {
                audioPlayer.play();
            }
        });
        
        prevButton.addEventListener('click', () => {
            currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
            audioPlayer.src = audioFiles[currentTrack].src;
            updateTrackName();
            if (isPlaying) {
                audioPlayer.play();
            }
        });

        updateTrackName();