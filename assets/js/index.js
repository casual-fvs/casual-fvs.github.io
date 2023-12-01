window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

	// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }


    bulmaSlider.attach();

})

function change_dynibar_comparison(case_name) {
    console.log(case_name);
    var video = document.getElementById('video_comparison_with_dynibar');
    var source = document.getElementById('source_comparison_with_dynibar');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/comparisons/dynibar/' + case_name + '.mp4')
    video.load();
    video.play();
}

function change_rodynrf_comparison(case_name) {
    console.log(case_name);
    var video = document.getElementById('video_comparison_with_rodynrf');
    var source = document.getElementById('source_comparison_with_rodynrf');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/comparisons/rodynrf/' + case_name + '.mp4')
    video.load();
    video.play();
}

function change_ablation(case_name) {
    console.log(case_name);
    var video = document.getElementById('video_ablation');
    var source = document.getElementById('source_ablation');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/comparisons/ablation/' + case_name + '.mp4')
    video.load();
    video.play();

    
    var label1 = document.getElementById('label-abla');
    var label2 = document.getElementById('label-full');
    var desc = document.getElementById('ablation_desc');
    if(case_name == 'wo_displacement') {
        label1.innerHTML = "without view-dependent displacement";
        label2.innerHTML = "with view-dependent displacement";
        desc.innerHTML = "The result without view-dependent displacement (left) may yield floaters or blurriness.";
    } else {
        label1.innerHTML = "without neighbor blending";
        label2.innerHTML = "with neighbor blending";
        desc.innerHTML = "The result without neighbor blending (left) may introduce temporal flickering in dynamic regions.";
    }
}
function change_realtime_demo(case_name) {
    console.log(case_name);
    var video = document.getElementById('video_realtime_demo');
    var source = document.getElementById('source_realtime_demo');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/real-time-demo/' + case_name + '.mp4')
    video.load();
    video.play();
}

