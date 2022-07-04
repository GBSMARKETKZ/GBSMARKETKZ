var btn = document.getElementById("mennu-button");
var nav = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})

// video modal
var videoBtn            = document.getElementById("video-btn");
var videoModal          = document.getElementById("video-modal");
var videoModalClose     = document.getElementById("video-close-button");

videoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    videoModal.classList.toggle("hidden");
})

videoModalClose.addEventListener("click", (event) => {
    event.preventDefault();
    videoModal.classList.toggle("hidden");
})
