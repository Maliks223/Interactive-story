let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // console.log(n);
  let i;
  const slides = document.querySelectorAll(".text");
  if (n == slides.length) {
    document.querySelector(".start-btn").style.display = "block";
  }
  if (n > slides.length) {
    slideIndex = slides.length;
  }
  if (n < 1) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

document.addEventListener("click", playAudio);

function playAudio() {
  let introAudio = document.getElementById("intro-audio");
  introAudio.play();
  document.removeEventListener("click", playAudio);
}

// for the timer
function startTimer() {
  min = 5;
  seconds = 0;
  flag = true;
  setInterval(() => {
    if (seconds < 10) {
      document.getElementById("timer").innerHTML =
        "timer : 0" + min + ":0" + seconds + "";
    } else {
      document.getElementById("timer").innerHTML =
        "timer : 0" + min + ":" + seconds;
    }
    if (seconds == 0) {
      if (min == 0) {
        // console.log("Finish");
        document.querySelector(".timer").style.backgroundColor = "red";
        flag = false;
      }
      min--;
      seconds = 59;
    }
    if (flag) {
      seconds--;
    } else {
      document.getElementById("timer").innerHTML = `timer : 00:00`;
      return;
    }
  }, 1000);
}

//On start-btn click, go to the first step: Choose the character
const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("characters").style.display = "block";
});

document.getElementById("boy-character").addEventListener("click", () => {
  startTimer();
  document.getElementById("characters").style.display = "none";
  document.getElementById("houses").style.display = "block";
  document.querySelector(".character-selected").style.display = "block";
  document.querySelector(".mary-img").style.display = "none";
  document.querySelector(".character-name").innerHTML = "Tarry";
});
document.getElementById("girl-character").addEventListener("click", () => {
  startTimer();
  document.getElementById("characters").style.display = "none";
  document.getElementById("houses").style.display = "block";
  document.querySelector(".character-selected").style.display = "block";
  document.querySelector(".tarry-img").style.display = "none";
  document.querySelector(".character-name").innerHTML = "Mary";
});
