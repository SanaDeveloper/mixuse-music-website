console.log('welcome to mixuse')


//initialize the varibles
let songindex = 0;
let audioElement = new Audio('songs/1.m4a');
let masterplay = document.getElementById('masterplay');
let myProgessBar = document.getElementById('myProgessBar');
let gif = document.getElementById('gif');
var songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
{songname: "dAkhil_Feat_Adah_Sharma___Life_Official_Video___Preet_Hundal___Arvindr_Khaira___Latest_Punjabi_Song", filepath:"songs/1.m4a",coverpath:"covers/1.jpg"},
{songname: "Arjun__Can't_Forget_You_(Tujhe_Bhula_Diya)_VIDEO_Song_ft._Jonita_Gandhi___T-Series", filepath:"songs/2.m4a",coverpath:"covers/2.jpg"},
{songname: "ARMAAN_BEDIL_-_MAIN_VICHARA_(Official_Video)___New_Song_2018___Speed_Records", filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
{songname: "Armaan_Bedil_-_Sohni____Ranjha_Yaar____Joban_Cheema____Garry_Nawaab_____Latest_Punjabi_Songs_2017", filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
{songname: "Attt_Karti_(Full_Song)___Jassi_Gill___Desi_Crew___Latest_Punjabi_Songs_2016___Speed_Records", filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
{songname: "Balam_Pichkari_Full_Song_Video_Yeh_Jawaani_Hai_Deewani___Ranbir_Kapoor,_Deepika_Padukone", filepath:"songs/6.m4a",coverpath:"covers/6.jpg"},
{songname: "Bewafa_Tu___Guri__(Official_Video)_Satti_Dhillon___Latest_Punjabi_Sad_Song_2018___Geet_MP3", filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
{songname: "Boofer_(Full_Song)___Armaan_Bedil_feat_Sukh-E_&_Whistle___Punjabi_Latest_Song_2016___Speed_Records", filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
{songname: "Churai Janda Eh - Jassi Gill", filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
{songname: "Guitar_Sikhda_(Full_Video)____Jassi_Gill___Jaani___B_Praak___Arvindr_Khaira___Punjabi_Songs_2018", filepath:"songs/10.mp3",coverpath:"covers/10.jpg"},

];




 




//audioElement.play();
// handle play/pause click
masterplay.addEventListener('click',()=>{
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterplay.classList.remove('fa-play-circle');
		masterplay.classList.add('fa-pause-circle');
		gif.style.opacity = 1;


	}

	else{
		audioElement.pause();
		masterplay.classList.remove('fa-pause-circle');
		masterplay.classList.add('fa-play-circle');
		gif.style.opacity = 0;

	}
})

// Listen to Events
audioElement.addEventListener('timeupdate',(e)=>{
	let total_duration = audioElement.duration;
	let seconds_in_one_percent = total_duration/100;
	let seeker_bar_percent = audioElement.currentTime /seconds_in_one_percent;
	myProgessBar.value = parseInt(seeker_bar_percent);

})

/*/*/// Update 

myProgessBar.addEventListener('change',()=>{
	audioElement.currentTime = myProgessBar.value * audioElement.duration/100;
})

