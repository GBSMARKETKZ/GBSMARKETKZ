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
    youtubeOptimize();
})

videoModalClose.addEventListener("click", (event) => {
    event.preventDefault();
    videoModal.classList.toggle("hidden");
    youtubeStopVideo();
})

// youtube frame optimization

function youtubeOptimize() {

	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

                            iframe.setAttribute( 'id', 'yt-video-player')
							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
	
};

function youtubeStopVideo () {

    var video = document.getElementById('yt-video-player');

    if (video) {
        video.parentNode.removeChild(video);
    }
};