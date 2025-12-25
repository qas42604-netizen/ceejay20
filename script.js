const audio = document.getElementById("music");
const playIcon = document.getElementById("icon-play");
const playBtn = document.getElementById("toggle");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const START_TIME = 87;

window.addEventListener("load", () => {
    audio.currentTime = START_TIME; 
    audio.play().then(() => {
        playIcon.setAttribute("name", "pause-outline");
        createConfetti(); 
    }).catch((err) => {
        console.log("Autoplay blocked:", err);
        playIcon.setAttribute("name", "play-outline");
    });
});

playBtn.addEventListener("click", () => {
    if(audio.paused){
        audio.play();
        playIcon.setAttribute("name", "pause-outline");
        createConfetti();
    } else {
        audio.pause();
        playIcon.setAttribute("name", "play-outline");
    }
});


prevBtn.addEventListener("click", () =>{
    audio.currentTime -= 20;
    prevBtn.setAttribute("name", "play-skip-back");

});

nextBtn.addEventListener("click", () =>{
    audio.currentTime += 20;
    audio.play();
    playIcon.setAttribute("name", "pause-outline");

});

audio.addEventListener("ended", () =>{
    audio.currentTime = 0;
    playIcon.setAttribute("name", "play-outline");

});

function createConfetti() {
    const container = document.getElementById("confetti-container");
    const colors = ["#ff0a54","#ff477e","#ff85a1","#fbb1b1","#f9bec7"];
    
    for(let i=0; i<50; i++){ 
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.width = confetti.style.height = (Math.random() * 10 + 5) + "px";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confetti.style.animationDelay = (Math.random() * 2) + "s";
        
        container.appendChild(confetti);

        confetti.addEventListener("animationend", () => confetti.remove());
    }
}

createConfetti();