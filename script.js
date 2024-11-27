const track = document.getElementById("track");
const thumbnail = document.getElementById("thumbnail");
const background = document.getElementById("background");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
trackIndex = 0;

tracks = [
  "https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3",
  "https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3"
];
thumbnails = [
  "https://i.ibb.co/7RhfRBZ/Fine-Line-Harry-Styles.jpg",
  "https://i.ibb.co/dkDC9CP/Justin-Bieber-Song-Cover-Art.jpg",
  "https://i.ibb.co/371t9Md/Loud-Luxury-Song-Cover-Art.jpg"
];
trackArtists = ["Harry Styles", "Justin Bieber", "Loud Luxury ft. Brando"];
trackTitles = ["Watermelon Sugar", "Yummy", "Body"];

let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";

    thumbnail.style.transform = "scale(1.25)";

    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";

    thumbnail.style.transform = "scale(1)";

    track.pause();
    playing = true;
  }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  background.src = thumbnails[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  background.src = thumbnails[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

prev.addEventListener("click", prevTrack);

function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;

  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);



loadItems();


async function loadItems() {


    let songList = [{
        track: "A Bar Song",
        artist: "Shaboozey",
        genre: "Pop",
    }, {
        track: "Die with a smile",
        artist: "Bruno Mars",
        genre: "Pop",
    },{
        track: "Birds of a feather",
        artist: "Lady Gaga",
        genre: "R&B",
    },
    {
        track: "Lose control",
        artist: "Teddy Swims",
        genre: "HipHop",
    },{
        track: "Espresso",
        artist: "Sabrina Carpenter",
        genre: "Pop",
    }];

    
    
    // let res = await fetch("https://theaudiodb.com/api/v1/json/2/track.php?m=2115888");
    // let items = await res.json();


    let body = "";
       for(i=0;i<songList.length;i++){
        body+=`
            <table class="bg-warning">
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Genre</th>
      </tr>
      <tr>
        <td>${songList[i].track}</td>
        <td>${songList[i].artist}</td>
        <td>${songList[i].genre}</td>
      </tr>
    </table>
        `;

       
        
    };


    console.log(body);

    document.getElementById("fav-music").innerHTML=body;

} 


    
//         var ctx = document.getElementById('myChart').getContext('2d');
//         var chart = new Chart(ctx, {
//             type: 'pie',
    
//             data: {
//                 labels: [
//                     'Red',
//                     'Yellow',
//                     'Blue'
//                 ] ,
//                 datasets: [{
//                     label: "My Chart",
//                     data:[300,50,100] ,
//                     backgroundColor:[
//                         'rgb(255, 99, 132)',
//                         'rgb(54, 162, 235)',
//                         'rgb(255, 205, 86)'
//                     ] ,
//                    hoverOffset:4
//                 }]
//             },
    
//         });
    
    
// }




